import { gql } from "@apollo/client";

export const gqlQuery = gql`
  query {
    profile {
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

export const gqlMutationAddTweet = gql`
  # fullText supplied by GraphQL Variables
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
