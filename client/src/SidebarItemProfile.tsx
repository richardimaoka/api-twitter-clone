/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProfileIcon } from "./ProfileIcon";

export const SidebarItemProfile = () => (
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
      <ProfileIcon />
    </div>
    <div>プロフィール</div>
  </div>
);
