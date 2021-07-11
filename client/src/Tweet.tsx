import { DisplayName } from "./DisplayName";
import { TweetActionBar } from "./TweetActionBar";
import { TweetBody } from "./TweetBody";
import { TweetProfileBar } from "./TweetProfilerBar";

export const Tweet = ({displayName, screenName, tweetTime, fullText, replyCount, retweetCount, likeCount}: TweetProps) => 
  <div>
    <TweetProfileBar displayName={displayName} screenName={screenName} tweetTime={tweetTime}/>
    <TweetBody text={fullText}/>
    <TweetActionBar replyCount={replyCount} retweetCount={retweetCount} likeCount={likeCount}  />
  </div>

interface TweetProps {
  displayName: string;
  screenName: string;
  tweetTime: string;
  fullText: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
} 