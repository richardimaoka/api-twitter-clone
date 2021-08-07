/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const TweetBody = ({ text }: { text: string }) => (
  <div
    css={css`
      text-align: left;
      font: normal normal normal 16px/24px Source Han Sans JP;
      letter-spacing: 0px;
      color: #333333;
      padding-bottom: 10px;
    `}
  >
    {text}
  </div>
);
