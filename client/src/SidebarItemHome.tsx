/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { HomeIcon } from "./HomeIcon";

export const SidebarItemHome = () => (
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
      <HomeIcon />
    </div>
    <div>ホーム</div>
  </div>
);
