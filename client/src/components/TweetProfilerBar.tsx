import { DisplayName } from "./DisplayName";
import { TweetTime } from "./TweetTime";
import { ScreenName } from "./ScreenName"

export const TweetProfileBar = ({displayName, screenName, tweetTime}: TweetProfileBarProps) =>
  <div>
    <DisplayName name={displayName} />
    <ScreenName name={screenName}/>
    <TweetTime time={tweetTime} />
  </div>

interface TweetProfileBarProps {
  displayName: string;
  screenName: string;
  tweetTime: string;
}