import React from "react";
import { User } from "./Twitter";
import { TweetList } from "./TweetList";

export const Center = ({ user }: CenterProps) => (
  <div>
    <TweetList user={user} />
  </div>
);

interface CenterProps {
  user: User;
}
