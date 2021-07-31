import { User, Tweet, QueryData } from "./Twitter";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

export const AddTweetBox = ({ user }: AddTweetBoxProps) => {
  const [inputFormTextValue, setInputFormTextValue] = useState<string>("");
  const [triggerMutation, { loading: mutationLoading, error: mutationError }] =
    useMutation<Tweet>(
      gql`
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
      `,
      {
        update: (cache, { data }) => {
          if (data) {
            const addedTweet = data;
            const queryData = cache.readQuery<QueryData>({
              query: gql`
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
              `,
            });
            if (queryData) {
              const existingTweets = queryData.timeline.tweets;
              cache.writeQuery({
                query: gql`
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
                `,
                data: {
                  timeline: {
                    tweets: [...existingTweets, addedTweet],
                  },
                },
              });
            }
          }
        },
      }
    );

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
