/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { MessagesIcon } from "./MessagesIcon";

export const SidebarItemMessages = () => (
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
      <MessagesIcon />
    </div>
    <div>メッセージ</div>
  </div>
);
