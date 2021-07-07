import { DisplayName } from "./DisplayName";
import { TweetTime } from "./TweetTime";
import { ScreenName } from "./ScreenName"

export const TweetProfileBar = (props: TweetProfileBarProps) =>
  <div>
    <DisplayName name={props.displayName} />
    <ScreenName name={props.screenName}/>
    <TweetTime time={props.tweetTime} />
  </div>

interface TweetProfileBarProps {
  displayName: string;
  screenName: string;
  tweetTime: string;
}