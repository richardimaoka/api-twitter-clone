/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const RecommendedUserTitle = () => {
  return (
    <div
      css={css`
        background: #f9f9f9 0% 0% no-repeat padding-box;
        border-radius: 20px 20px 0px 0px;
        width: 350px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 10px;
        padding-right: 10px;
      `}
    >
      <span
        css={css`
          text-align: left;
          font: normal normal bold 20px/30px Meiryo;
          letter-spacing: 0px;
          color: #333333;
        `}
      >
        おすすめユーザー
      </span>
    </div>
  );
};
