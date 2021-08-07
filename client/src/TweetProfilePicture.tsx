/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const TweetProfilePicture = ({ imageUrl }: { imageUrl: string }) => (
  <div
    css={css`
      padding-right: 5px;
    `}
  >
    <img
      css={css`
        width: 48px;
        height: 48px;
        border-radius: 24px;
      `}
      src={imageUrl}
    />
  </div>
);
