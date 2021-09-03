/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ProfileTopContentProps {}

export const ProfileTopContent = ({}: ProfileTopContentProps) => {
  return (
    <div
      css={css`
        padding-left: 16px;
      `}
    >
      <div
        css={css`
          position: relative;
          height: 130px;
          width: 130px;
          margin-top: -70px;
          border-color: white;
          border-style: solid;
          border-width: 5px;
          border-radius: 70px;
        `}
      >
        <img
          css={css`
            height: 130px;
            width: 130px;
            border-radius: 65px;
          `}
          src="https://pbs.twimg.com/profile_images/1423634844710445062/qOvd9wDN_400x400.jpg"
        />
      </div>
    </div>
  );
};
