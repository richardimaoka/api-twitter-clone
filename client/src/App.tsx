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
import { useState } from "react";
import { QueryData, Tweet } from "./Twitter";
import { TweetList } from "./TweetList";
import { User } from "./Twitter";
import { AddTweetBox } from "./AddTweetBox";

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

  const user = {
    id: "fakeUserId",
    screenName: "fakeScreenName",
    url: "https://example.com",
    profileImageUrl: "https://example.com",
  };
  if (loading) {
    return <p>Loading ...</p>;
  } else if (error) {
    return <p>Remote Server Error :(</p>;
  } else if (typeof data == "undefined") {
    return <p>Remote Server Error :(</p>;
  } else {
    return (
      <React.Fragment>
        <AddTweetBox user={user} />
        <header>
          <TweetList tweets={data.timeline.tweets} />
        </header>
      </React.Fragment>
    );
  }
};

export default App;
