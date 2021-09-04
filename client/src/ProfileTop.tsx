/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProfileBackgroundImage } from "./ProfileBackgroundImage";
import { ProfileTopContent } from "./ProfileTopContent";

export const ProfileTop = () => {
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
