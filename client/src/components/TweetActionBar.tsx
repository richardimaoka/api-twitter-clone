import { ReplyIcon } from "./ReplyIcon"
import { RetweetIcon } from "./RetweetIcon"
import { LikeIcon } from "./LikeIcon"

export const TweetActionBar = ({replyCount, retweetCount, likeCount}: TweetActionBarProps) => 
  <div>
    <ReplyIcon />
    <div>{replyCount}</div>
    <RetweetIcon />
    <div>{retweetCount}</div>
    <LikeIcon />
    <div>{likeCount}</div>
  </div>

interface TweetActionBarProps {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
}