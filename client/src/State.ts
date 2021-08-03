import { useMutation, gql } from "@apollo/client";

export const state = "";

const queryGql = gql`
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

const mutationGql = gql`
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
