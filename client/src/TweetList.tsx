import { User, QueryData } from "./Twitter";
import { TweetBox } from "./TweetBox";
import { useQuery, gql } from "@apollo/client";
import { AddTweetBox } from "./AddTweetBox";
import React from "react";

export const TweetList = ({ user }: TweetListProps) => {
  const { loading, error, data } = useQuery<QueryData>(
    gql`
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
    `
  );

  if (loading) {
    return <p>Loading ...</p>;
  } else if (error) {
    return <p>Remote Server Error :(</p>;
  } else if (typeof data == "undefined") {
    return <p>Remote Server Error :(</p>;
  } else {
    return (
      <React.Fragment>
        <AddTweetBox user={user} />
        <header>
          {data.timeline.tweets.map((t) => (
            <div key={t.id}>
              <TweetBox
                displayName={t.user.screenName}
                screenName={t.user.screenName}
                tweetTime={t.createdAt}
                fullText={t.fullText}
                replyCount={t.replyCount}
                likeCount={t.favoriteCount}
                retweetCount={t.retweetCount}
              />
            </div>
          ))}
        </header>
      </React.Fragment>
    );
  }
};

interface TweetListProps {
  user: User;
}
