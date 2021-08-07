/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReplyIcon } from "./ReplyIcon";
import { RetweetIcon } from "./RetweetIcon";
import { LikeIcon } from "./LikeIcon";
import { ShareIcon } from "./ShareIcon";

export const TweetActionBar = ({
  replyCount,
  retweetCount,
  likeCount,
}: TweetActionBarProps) => (
  <div
    css={css`
      display: flex;
    `}
  >
    <div
      css={css`
        flex-grow: 1;
        display: flex;
      `}
    >
      <ReplyIcon />
      <div>{replyCount}</div>
    </div>
    <div
      css={css`
        flex-grow: 1;
        display: flex;
      `}
    >
      <RetweetIcon />
      <div>{retweetCount}</div>
    </div>
    <div
      css={css`
        flex-grow: 1;
        display: flex;
      `}
    >
      <LikeIcon />
      <div>{likeCount}</div>
    </div>
    <div
      css={css`
        flex-grow: 1;
      `}
    >
      <ShareIcon />
    </div>
  </div>
);

interface TweetActionBarProps {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
}
