/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProfileBackgroundImage } from "./ProfileBackgroundImage";
import { ProfileTopContent } from "./ProfileTopContent";
interface ProfileTopProps {}

export const ProfileTop = ({}: ProfileTopProps) => {
  return (
    <div
      css={css`
        width: 600px;
        border: 1px solid #cecece;
      `}
    >
      <ProfileBackgroundImage />
      <ProfileTopContent />
    </div>
  );
};
