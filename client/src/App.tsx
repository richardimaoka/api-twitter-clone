import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { QueryData, Tweet } from "./Twitter";
import { TweetList } from "./TweetList";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "Bearer nothingnothing",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

const QUERY = gql`
  query {
    timeline {
      tweets {
        id
        createdAt
        fullText
        favoriteCount
        retweetCount
        replyCount
        user {
          screenName
          profileImageUrl
        }
      }
    }
  }
`;

const MUTATION = gql`
  mutation ($fullText: String!) {
    addTweet(fullText: $fullText) {
      id
      createdAt
      fullText
      favoriteCount
      replyCount
      retweetCount
      quoteCount
    }
  }
`;

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Content />
      </ApolloProvider>
    </div>
  );
};
interface ContentState {
  queryState: "success" | "error" | "loading";
  error: Error | undefined;
  tweets: Tweet[];
}

type AddTweet = (t: Tweet) => void;

const Content = () => {
  const { loading, error, data } = useQuery<QueryData>(QUERY);

  if (loading) {
    return <p>Loading ...</p>;
  } else if (error) {
    return <p>Remote Server Error :(</p>;
  } else if (typeof data == "undefined") {
    return <p>Remote Server Error :(</p>;
  } else {
    return (
      <React.Fragment>
        <AddTweetBox />
        <header>
          <TweetList tweets={data.timeline.tweets} />
        </header>
      </React.Fragment>
    );
  }
};

let i = 2300;
const AddTweetBox = () => {
  const [inputValue, setValue] = useState<string>("");
  const [addTweetMutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(MUTATION);
  const addTweetCallback = (fullText: string): void => {
    const user = {
      id: "fakeUserId",
      screenName: "fakeScreenName",
      url: "https://example.com",
      profileImageUrl: "https://example.com",
    };
    const tweet: Tweet = {
      id: (i++).toString(),
      user: user,
      createdAt: "",
      fullText: fullText,
      favoriteCount: 0,
      replyCount: 0,
      retweetCount: 0,
      quoteCount: 0,
    };
    addTweetMutation({ variables: { fullText: fullText } });
  };
  return (
    <div>
      <input
        placeholder="いまどうしてる？"
        value={inputValue}
        onChange={(input) => setValue(input.target.value)}
      />
      <button onClick={() => addTweetCallback(inputValue)}>ツイートする</button>
    </div>
  );
};

export default App;
