import { User, Tweet, QueryData } from "./Twitter";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { gqlMutationAddTweet, gqlQuery } from "./GqlQuery";

export const AddTweetBox = ({ user }: AddTweetBoxProps) => {
  const [inputFormTextValue, setInputFormTextValue] = useState<string>("");
  const [
    triggerMutation /*, { loading: mutationLoading, error: mutationError }*/,
  ] = useMutation<Tweet>(gqlMutationAddTweet, {
    refetchQueries: [{ query: gqlQuery }],
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
