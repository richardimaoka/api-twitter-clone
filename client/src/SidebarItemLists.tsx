/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ListsIcon } from "./ListsIcon";

export const SidebarItemLists = () => (
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
      <ListsIcon />
    </div>
    <div>リスト</div>
  </div>
);
