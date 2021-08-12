/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { BookmarksIcon } from "./BookmarksIcon";

export const SidebarItemBookmarks = () => (
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
      <BookmarksIcon />
    </div>
    <div>ブックマーク</div>
  </div>
);
