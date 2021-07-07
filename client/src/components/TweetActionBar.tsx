import { ReplyIcon } from "./ReplyIcon"
import { RetweetIcon } from "./RetweetIcon"
import { LikeIcon } from "./LikeIcon"

export const TweetActionBar = (props: TweetActionBarProps) => 
  <div>
    <ReplyIcon />
    <div>{props.replyCount}</div>
    <RetweetIcon />
    <div>{props.retweetCount}</div>
    <LikeIcon />
    <div>{props.likeCount}</div>
  </div>

interface TweetActionBarProps {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
}