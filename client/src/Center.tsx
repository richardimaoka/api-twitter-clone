import { User } from "./Twitter";
import { TweetList } from "./TweetList";
import { AddTweetBox } from "./AddTweetBox";
import { ProfileTop } from "./ProfileTop";

interface CenterProps {
  user: User;
}

export const Center = ({ user }: CenterProps) => (
  <div>
    <ProfileTop />
    <AddTweetBox user={user} />
    <TweetList user={user} />
  </div>
);
