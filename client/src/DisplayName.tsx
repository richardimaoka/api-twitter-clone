/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const DisplayName = ({ name }: { name: string }) => (
  <div
    css={css`
      padding-right: 5px;
      text-align: left;
      font: normal normal bold 16px/24px Meiryo;
      letter-spacing: 0px;
      color: #333333;
    `}
  >
    {name}
  </div>
);
