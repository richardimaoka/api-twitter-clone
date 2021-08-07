/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const RecommendedUserBottom = () => (
  <div
    css={css`
      background: #f9f9f9 0% 0% no-repeat padding-box;
      border-radius: 0px 0px 20px 20px;
      width: 350px;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 10px;
      padding-right: 10px;
    `}
  >
    <span
      css={css`
        text-align: left;
        font: normal normal normal 16px/24px Meiryo;
        letter-spacing: 0px;
        color: #4688d4;
      `}
    >
      さらに表示
    </span>
  </div>
);
