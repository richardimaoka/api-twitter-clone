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
import { useState } from "react";
import { QueryData, Tweet } from "./Twitter"

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
interface ContentState {
  queryState: 'success' | 'error' | 'loading'
  error: Error | undefined
  tweets: Tweet[]
}  
type AddTweet = (t: Tweet) => void

const useContentState = (): [ ContentState, AddTweet ]  => {
  const { loading, error, data } = useQuery<QueryData>(QUERY);
  let [ tweets , setTweets] = useState<Tweet[]>([]);

  const addTweet = (tweet: Tweet): void => {
    setTweets([tweet].concat(tweets))
  };

  if ( loading ) {
     const contentState: ContentState =  {
       queryState: 'loading',
       error: undefined,
       tweets: []
     }       
     return [contentState, addTweet]
  } else if (error){
     const contentState: ContentState =  {
       queryState: 'error',
       error: error,
       tweets: []
     }       
     return [contentState, addTweet]
  } else if (typeof data == "undefined" ) {
     const contentState: ContentState =  {
       queryState: 'error',
       error: { name: "InternalError", message: "GraphQL query returned undefined" },
       tweets: []
     }       
     return [contentState, addTweet]
  } else {
    setTweets(data.timeline.tweets)
     const contentState: ContentState =  {
       queryState: 'success',
       error: undefined,
       tweets:tweets
     }       
     return [contentState, addTweet]
  }
}

const Content = () => {
  const [contentState, addTweet] = useContentState()

  switch(contentState.queryState) {
    case 'error':
      return <p>Error :(</p>;
    case 'loading':
      return <p>Loading ...</p>;
    case 'success' :
      return (
          <React.Fragment>
            <AddTweetBox />
            <header>
              <Child tweets={contentState.tweets}></Child>
            </header>
          </React.Fragment>
      );
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

const Child = ({tweets}: {tweets: Tweet[]}) => {
    return (
      <div>{
        tweets.map(
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
