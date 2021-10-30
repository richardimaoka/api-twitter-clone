/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProfileTopBackground } from "./ProfileTopBackground";

export const ProfileTop = () => {
  return (
    <div
      css={css`
        width: 600px;
        border: 1px solid #cecece;
      `}
    >
      <ProfileTopBackground />
      <div
        css={css`
          padding-left: 16px;
        `}
      >
        <div
          css={css`
            position: relative;
            height: 130px;
            width: 130px;
            margin-top: -70px;
            border-color: white;
            border-style: solid;
            border-width: 5px;
            border-radius: 70px;
          `}
        >
          <img
            css={css`
              height: 130px;
              width: 130px;
              border-radius: 65px;
            `}
            src="https://pbs.twimg.com/profile_images/1423634844710445062/qOvd9wDN_400x400.jpg"
          />
        </div>
        <div
          css={css`
            padding-bottom: 10px;
          `}
        >
          <div
            css={css`
              font: normal normal bold 20px/30px Meiryo;
              color: #333333;
            `}
          >
            リチャード 伊真岡
          </div>
          <div
            css={css`
              font: normal normal normal 16px/24px Meiryo;
              color: #606060;
            `}
          >
            @RichardImaokaJP
          </div>
        </div>
        <div></div>
        <div
          css={css`
            font: normal normal normal 16px/24px Source Han Sans JP;
            color: #333333;
            margin-bottom: 10px;
          `}
        >
          中堅エンジニア
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <a
            href="https://blog-jp.richardimaoka.net"
            css={css`
              font: normal normal normal 16px/24px Meiryo;
              color: #4688d4;
              text-decoration: none;
              margin-right: 10px;
            `}
          >
            blog-jp.richardimaoka.net
          </a>
          <span
            css={css`
              font: normal normal normal 16px/24px Meiryo;
              color: #606060;
            `}
          >
            2014年10月からTwitterを利用しています
          </span>
        </div>
        <div>
          <span
            css={css`
              font: normal normal normal 16px/24px Source Han Sans JP;
              color: #333333;
              font-weight: bold;
            `}
          >
            221
          </span>
          <span
            css={css`
              font: normal normal normal 16px/24px Source Han Sans JP;
              color: #333333;
              margin-right: 20px;
            `}
          >
            フォロー中
          </span>
          <span
            css={css`
              font: normal normal normal 16px/24px Source Han Sans JP;
              color: #333333;
              font-weight: bold;
            `}
          >
            348
          </span>
          <span
            css={css`
              font: normal normal normal 16px/24px Source Han Sans JP;
              color: #333333;
            `}
          >
            フォロワー
          </span>
        </div>
      </div>
    </div>
  );
};
