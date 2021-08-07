import { RecommendedUserList } from "./RecommendedUserList";
import { RecommendedUserTitle } from "./RecommendedUserTitle";
import { RecommendedUserBottom } from "./RecommendedUserBottom";
import { User } from "./Twitter";

export const Recommended = ({ users }: RecommendedProps) => {
  return (
    <div>
      <RecommendedUserTitle />
      <RecommendedUserList users={users} />
      <RecommendedUserBottom />
    </div>
  );
};

interface RecommendedProps {
  users: User[];
}
