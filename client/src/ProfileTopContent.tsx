/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProfileTopCircleImage } from "./ProfileTopCircleImage";
import { ProfileTopNames } from "./ProfileTopNames";

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
        <ProfileTopNames />
      </div>
    </div>
  );
};
