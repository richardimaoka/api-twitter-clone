/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { User } from "./Twitter";

export const RecommendedUser = ({ user }: RecommendedUserProps) => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 350px;
          padding: 10px;
          background-color: #f9f9f9;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              padding-right: 10px;
            `}
          >
            <img
              css={css`
                width: 50px;
                height: 50px;
                border-radius: 25px;
              `}
              alt={user.name}
              src={user.profileImageUrl}
            />
          </div>
          <div>
            <div
              css={css`
                text-align: left;
                font: normal normal bold 16px/24px Meiryo;
                letter-spacing: 0px;
                color: #333333;
              `}
            >
              {user.name}
            </div>
            <div
              css={css`
                color: var(--support-text-color);
                text-align: left;
                font: normal normal normal 16px/24px Meiryo;
                letter-spacing: 0px;
                color: #606060;
              `}
            >
              @{user.screenName}
            </div>
          </div>
        </div>
        <div
          css={css`
            padding-top: 10px;
          `}
        >
          <div>
            <button
              css={css`
                background: #ffffff 0% 0% no-repeat padding-box;
                border: 1px solid #4688d4;
                border-radius: 15px;
                width: 90px;
                height: 30px;
              `}
            >
              <span
                css={css`
                  text-align: center;
                  font: normal normal bold 16px/24px Source Han Sans JP;
                  letter-spacing: 0px;
                  color: #4688d4;
                `}
              >
                フォロー
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface RecommendedUserProps {
  user: User;
}
