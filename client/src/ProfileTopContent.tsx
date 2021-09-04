/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProfileTopCircleImage } from "./ProfileTopCircleImage";

export const ProfileTopContent = () => {
  return (
    <div
      css={css`
        padding-left: 16px;
      `}
    >
      <div
        css={css`
          position: relative;
          margin-top: -70px;
        `}
      >
        <ProfileTopCircleImage />
      </div>
    </div>
  );
};
