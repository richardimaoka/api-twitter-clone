import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { QueryData, Timeline } from "./Twitter"

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

const App = () => {
    return (
      <div>
        <ApolloProvider client={client}>
          <Content />
        </ApolloProvider>
      </div>
    );
}

const Content = () => {
  const { loading, error, data } = useQuery<QueryData>(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (typeof data == "undefined") {
    return <p>data wrong</p>;    
  } else {
    return (
      <React.Fragment>
        <AddTweetBox />
        <header>
          <Child timeline={data.timeline}></Child>
        </header>
      </React.Fragment>
    )
  }

}

const AddTweetBox = () => {
  return (
    <div>
      <input placeholder="いまどうしてる？" />
      <button>ツイートする</button>
    </div>
  );
};

const Child = ({timeline}: {timeline: Timeline}) => {
    return (
      <div>{
        timeline.tweets.map(
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
};

export default App;
