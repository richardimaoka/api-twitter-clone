/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { SearchTopicsIcon } from "./SearchTopicsIcon";

export const SidebarItemSearchTopics = () => (
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
      <SearchTopicsIcon />
    </div>
    <div>話題を検索</div>
  </div>
);
