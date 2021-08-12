/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { NotificationIcon } from "./NotificationIcon";

export const SidebarItemNotification = () => (
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
      <NotificationIcon />
    </div>
    <div>通知:</div>
  </div>
);
