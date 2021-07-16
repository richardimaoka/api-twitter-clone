/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { TweetActionBar } from "./TweetActionBar";
import { TweetBody } from "./TweetBody";
import { TweetProfileBar } from "./TweetProfilerBar";
import { TweetProfilePicture } from "./TweetProfilePicture";

export const TweetBox = ({displayName, screenName, tweetTime, fullText, replyCount, retweetCount, likeCount}: TweetBoxProps) => 
  <div 
    css={css`
      display: flex;
    `}
  >
    <TweetProfilePicture />
    <div>
      <TweetProfileBar displayName={displayName} screenName={screenName} tweetTime={tweetTime}/>
      <TweetBody text={fullText}/>
      <TweetActionBar replyCount={replyCount} retweetCount={retweetCount} likeCount={likeCount}  />
    </div>
  </div>

interface TweetBoxProps {
  displayName: string;
  screenName: string;
  tweetTime: string;
  fullText: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
} 