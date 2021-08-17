import React from "react";
import { RecommendedUser } from "./RecommendedUser";
import { User } from "./Twitter";

export const RecommendedUserList = ({
  recommendedUsers,
}: RecommendedUserListProps) => {
  return (
    <React.Fragment>
      {recommendedUsers.map((user) => (
        <RecommendedUser user={user}></RecommendedUser>
      ))}
    </React.Fragment>
  );
};

interface RecommendedUserListProps {
  recommendedUsers: User[];
}
