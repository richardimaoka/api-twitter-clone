/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const ScreenName = ({ name }: { name: string }) => (
  <div
    css={css`
      padding-right: 5px;
      text-align: left;
      font: normal normal normal 16px/24px Meiryo;
      letter-spacing: 0px;
      color: #606060;
    `}
  >
    &#64;{name}
  </div>
);
