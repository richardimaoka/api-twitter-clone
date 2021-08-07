/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const TweetTime = ({ time }: { time: string }) => (
  <div
    css={css`
      text-align: left;
      font: normal normal normal 16px/24px Meiryo;
      letter-spacing: 0px;
      color: #606060;
    `}
  >
    {time}
  </div>
);
