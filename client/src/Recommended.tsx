import { RecommendedUserList } from "./RecommendedUserList";
import { RecommendedUserTitle } from "./RecommendedUserTitle";
import { RecommendedUserBottom } from "./RecommendedUserBottom";
import { User } from "./Twitter";

export const Recommended = ({ recommendedUsers }: RecommendedProps) => {
  return (
    <div>
      <RecommendedUserTitle />
      <RecommendedUserList recommendedUsers={recommendedUsers} />
      <RecommendedUserBottom />
    </div>
  );
};

interface RecommendedProps {
  recommendedUsers: User[];
}
