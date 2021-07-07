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
import { QueryData, Tweet } from "./Twitter"
import { ReplyIcon } from './components/ReplyIcon'
import { RetweetIcon } from './components/RetweetIcon'
import { LikeIcon } from './components/LikeIcon'
import { ShareIcon } from './components/ShareIcon'

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
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
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
`

const App = () => {
    return (
      <div>
        <ReplyIcon />
        <RetweetIcon />
        <LikeIcon />
        <ShareIcon />
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
  const [ tweets , setTweets] = useState<Tweet[]>([]);
  useEffect(() => {
    console.log("useContentState.useEffect run")
    if(data?.timeline) {
      console.log("setTweets")
      setTweets(data.timeline.tweets)
    }
  }, [data])
  console.log("useContentState", { loading: loading, error: error, data: data} )

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
            <AddTweetBox addTweet={addTweet}/>
            <header>
              <Child tweets={contentState.tweets}></Child>
            </header>
          </React.Fragment>
      );
  }
}

let i = 2300;
const AddTweetBox = ({addTweet} : {addTweet: AddTweet}) => {
  const [inputValue, setValue] = useState<string>("")
  const [addTweetMutation, { loading: mutationLoading, error: mutationError } ] = useMutation(MUTATION)
  const addTweetCallback = (fullText: string): void => {
    const user = {
        id: "fakeUserId",
        screenName: "fakeScreenName",
        url: "https://example.com",
        profileImageUrl: "https://example.com",
      }
    const tweet : Tweet = {
      id: (i++).toString(),
      user : user,
      createdAt: "",
      fullText: fullText,
      favoriteCount: 0,
      replyCount: 0,
      retweetCount: 0,
      quoteCount: 0,
    }
    addTweet(tweet)
    addTweetMutation({variables: {fullText: fullText}})
  }
  return (
    <div>
      <input placeholder="いまどうしてる？" value={inputValue} onChange={input => setValue(input.target.value)}/>
      <button onClick={() => addTweetCallback(inputValue)}>ツイートする</button>
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
