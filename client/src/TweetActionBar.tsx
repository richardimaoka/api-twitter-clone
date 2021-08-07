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
        align-items: flex-end;
      `}
    >
      <ReplyIcon />
      <div css={css``}>{replyCount}</div>
    </div>
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
      `}
    >
      <RetweetIcon />
      <div>{retweetCount}</div>
    </div>
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
      `}
    >
      <LikeIcon />
      <div>{likeCount}</div>
    </div>
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
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
