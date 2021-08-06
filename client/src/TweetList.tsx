import { User, QueryData } from "./Twitter";
import { TweetBox } from "./TweetBox";
import { useQuery, gql } from "@apollo/client";
import { AddTweetBox } from "./AddTweetBox";
import React from "react";
import { Tweet } from "./Twitter";
import { gqlQuery } from "./GqlQuery";

export const TweetList = ({ user }: TweetListProps) => {
  const { loading, error, data } = useQuery<QueryData>(gqlQuery, {
    variables: {
      offset: 0,
      limit: 2,
    },
  });

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
          <TweetListInternal tweets={data.profile.tweets} />
        </header>
      </React.Fragment>
    );
  }
};

const TweetListInternal = ({ tweets }: TweetListInternalProps) => {
  return (
    <React.Fragment>
      {tweets.map((t) => (
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
    </React.Fragment>
  );
};

interface TweetListInternalProps {
  tweets: Tweet[];
}

interface TweetListProps {
  user: User;
}
