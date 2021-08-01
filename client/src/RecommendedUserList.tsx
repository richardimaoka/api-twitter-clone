import React from "react";
import { RecommendedUser } from "./RecommendedUser";
import { User } from "./Twitter";

export const RecommendedUserList = ({ users }: RecommendedUserListProps) => {
  return (
    <React.Fragment>
      {users.map((user) => (
        <RecommendedUser user={user}></RecommendedUser>
      ))}
    </React.Fragment>
  );
};

interface RecommendedUserListProps {
  users: User[];
}
