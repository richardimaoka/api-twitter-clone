/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
  useQuery,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { Center } from "./Center";
import { Recommended } from "./Recommended";
import { Sidebar } from "./Sidebar";
import { QueryData } from "./Twitter";
import { gqlQuery } from "./GqlQuery";

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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Contents />
    </ApolloProvider>
  );
};

const Contents = () => {
  const user = {
    id: "fakeUserId",
    name: "FakeDisplayName",
    screenName: "fakeScreenName",
    url: "https://example.com",
    profileImageUrl:
      "https://pbs.twimg.com/profile_images/1423634844710445062/qOvd9wDN_400x400.jpg",
  };

  const { loading, error, data } = useQuery<QueryData>(gqlQuery, {
    variables: {
      offset: 0,
      limit: 2,
    },
  });

  if (loading) {
    return <p>Loading ...</p>;
  } else if (error) {
    console.log(error);
    return <p>Remote Server Error :( </p>;
  } else if (typeof data == "undefined") {
    return <p>Remote Server Error :(</p>;
  } else {
    console.log(data.profile.recommendedUsers);
    return (
      <div
        css={css`
          display: flex;
        `}
      >
        <Sidebar />
        <Center user={user} />
        <Recommended recommendedUsers={data.profile.recommendedUsers} />
      </div>
    );
  }
};

export default App;
