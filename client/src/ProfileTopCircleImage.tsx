/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const ProfileTopCircleImage = () => {
  return (
    <div
      css={css`
        height: 130px;
        width: 130px;
        border-color: white;
        border-style: solid;
        border-width: 5px;
        border-radius: 70px;
      `}
    >
      <img
        alt="circle img"
        css={css`
          height: 130px;
          width: 130px;
          border-radius: 65px;
        `}
        src="https://pbs.twimg.com/profile_images/1423634844710445062/qOvd9wDN_400x400.jpg"
      />
    </div>
  );
};
