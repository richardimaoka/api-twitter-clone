import { User, Tweet, QueryData } from "./Twitter";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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

export const AddTweetBox = ({ user }: AddTweetBoxProps) => {
  const [inputFormTextValue, setInputFormTextValue] = useState<string>("");
  const [
    triggerMutation /*, { loading: mutationLoading, error: mutationError }*/,
  ] = useMutation<Tweet>(mutationGql, {
    refetchQueries: [{ query: queryGql }],
  });
  const tweetButtonCallback = (inputTextValue: string): void => {
    triggerMutation({ variables: { fullText: inputTextValue } });
  };

  return (
    <div>
      <input
        placeholder="いまどうしてる？"
        value={inputFormTextValue}
        onChange={(input) => setInputFormTextValue(input.target.value)}
      />
      <button onClick={() => tweetButtonCallback(inputFormTextValue)}>
        ツイートする
      </button>
    </div>
  );
};

interface AddTweetBoxProps {
  user: User;
}
