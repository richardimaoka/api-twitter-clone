import { User } from "./Twitter";
import { TweetList } from "./TweetList";
import { AddTweetBox } from "./AddTweetBox";
import { ProfileTop } from "./ProfileTop";

export const Center = ({ user }: CenterProps) => (
  <div>
    <ProfileTop />
    <AddTweetBox user={user} />
    <TweetList user={user} />
  </div>
);

interface CenterProps {
  user: User;
}
