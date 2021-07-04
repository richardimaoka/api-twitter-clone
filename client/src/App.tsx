import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import React from "react";

import { setContext } from "@apollo/client/link/context";

interface User {
  id: string;
  screenName: string;
  url: string;
  profileImageUrl: string;
}

interface Tweet {
  id: string;
  user : User;
  createdAt: string;
  fullText: string;
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
  quoteCount: number;
}

interface Timeline {
  tweets: Tweet[];
}

interface QueryData {
  timeline: Timeline
}

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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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

function App() {
  const a = "Learn react for greater good";

  return (
    <div>
      <ApolloProvider client={client}>
        <AddTweetBox />
        <header>
          <Child></Child>
        </header>
      </ApolloProvider>
    </div>
  );
}

const AddTweetBox = ({}) => {
  return (
    <div>
      <input placeholder="いまどうしてる？" />
      <button>ツイートする</button>
    </div>
  );
};

const Child = () => {
  const { loading, error, data } = useQuery<QueryData>(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if(data?.timeline) {
    return (
      <div>{
        data.timeline.tweets.map(
          ({
            id,
            createdAt,
            user,
            fullText,
            favoriteCount,
            replyCount,
            retweetCount,
          }) => (
            <div key={id}>
              <div>{user.screenName}</div>
              <div>{createdAt}</div>
              <p>{fullText}</p>
              <p>
                <span>reply: {replyCount}</span>,<span>retweet: {retweetCount}</span>{" "}
                ,<span>favorite: {favoriteCount}</span>
              </p>
            </div>
          )
        )}
      </div> 
    )
  } else {
    return <div>nothing</div>
  }
};

export default App;
