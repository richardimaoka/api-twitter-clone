import { RecommendedUserList } from "./RecommendedUserList";
import { RecommendedUserTitle } from "./RecommendedUserTitle";
import { User } from "./Twitter";

export const Recommended = ({ users }: RecommendedProps) => {
  return (
    <div>
      <RecommendedUserTitle />
      <RecommendedUserList users={users} />
    </div>
  );
};

interface RecommendedProps {
  users: User[];
}
