/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ProfileBackgroundImageProps {}

export const ProfileBackgroundImage = ({}: ProfileBackgroundImageProps) => {
  return (
    <div>
      <img
        css={css`
          height: 200px;
          width: 100%;
        `}
        src="https://pbs.twimg.com/profile_banners/2875908842/1568031488/1500x500"
      />
    </div>
  );
};
