import { User, Tweet } from "./Twitter";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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

export const AddTweetBox = ({ user }: AddTweetBoxProps) => {
  const [inputValue, setValue] = useState<string>("");
  const [addTweetMutation, { loading: mutationLoading, error: mutationError }] =
    useMutation<Tweet>(MUTATION, {
      onCompleted: (tweet: Tweet) => prependTweetToModel(tweet),
    });

  const addTweetCallback = (fullText: string): void => {
    addTweetMutation({ variables: { fullText: fullText } });
  };

  return (
    <div>
      <input
        placeholder="いまどうしてる？"
        value={inputValue}
        onChange={(input) => setValue(input.target.value)}
      />
      <button onClick={() => addTweetCallback(inputValue)}>ツイートする</button>
    </div>
  );
};

interface AddTweetBoxProps {
  user: User;
}
