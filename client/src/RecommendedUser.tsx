import { User } from "./Twitter";

export const RecommendedUser = ({ user }: RecommendedUserProps) => {
  return (
    <div>
      <div>{user.profileImageUrl}</div>
      <div>{user.name}</div>
      <div>@{user.screenName}</div>
      <button>follow</button>
    </div>
  );
};

interface RecommendedUserProps {
  user: User;
}
