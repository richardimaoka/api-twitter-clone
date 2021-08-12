/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { SeeMoreIcon } from "./SeeMoreIcon";

export const SidebarItemSeeMore = () => (
  <div
    css={css`
      display: flex;
      font: normal normal 20px/30px Meiryo;
      padding: 12px;
    `}
  >
    <div
      css={css`
        padding-right: 20px;
      `}
    >
      <SeeMoreIcon />
    </div>
    <div>もっと見る</div>
  </div>
);
