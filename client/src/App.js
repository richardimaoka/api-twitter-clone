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

const EXCHANGE_RATES = gql`
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
        <header>
          <Child></Child>
        </header>
      </ApolloProvider>
    </div>
  );
}

const Child = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return data.timeline.tweets.map(
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
  );
};
export default App;
