/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { User, QueryData } from "./Twitter";
import { TweetBox } from "./TweetBox";
import { useQuery } from "@apollo/client";
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
    console.log(error);
    return <p>Remote Server Error :( </p>;
  } else if (typeof data == "undefined") {
    return <p>Remote Server Error :(</p>;
  } else {
    return (
      <div>
        <AddTweetBox user={user} />
        <TweetListInternal tweets={data.profile.tweets} />
      </div>
    );
  }
};

const TweetListInternal = ({ tweets }: TweetListInternalProps) => {
  return (
    <div
      css={css`
        border-left: 1px solid #cecece;
        border-right: 1px solid #cecece;
      `}
    >
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
            profileImageUrl={t.user.profileImageUrl}
          />
        </div>
      ))}
    </div>
  );
};

interface TweetListInternalProps {
  tweets: Tweet[];
}

interface TweetListProps {
  user: User;
}
