/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const TweetTime = ({ time }: { time: string }) => {
  const date = new Date(time);
  const now = new Date(); //TODO: 'now' should be injected
  const diffMillSeconds = Date.now() - Date.parse(time); //TODO: 'now' should be injected

  let timeRepresentation = "";
  if (diffMillSeconds < 10 * 1000 /*10 seconds*/) {
    timeRepresentation = "now";
  } else if (diffMillSeconds < 60 * 1000 /*60 seconds*/) {
    timeRepresentation = `${diffMillSeconds / 1000} + "秒前`;
  } else if (diffMillSeconds < 60 * 60 * 1000 /*60 minutes*/) {
    timeRepresentation = `${diffMillSeconds / (60 * 1000)}分前`;
  } else if (diffMillSeconds < 24 * 60 * 60 * 1000 /*24 hours*/) {
    timeRepresentation = `${diffMillSeconds / (60 * 60 * 1000)}時間前"`;
  } else if (date.getFullYear() == now.getFullYear()) {
    timeRepresentation = `${date.getMonth() + 1}月${date.getDate()}日`;
  } else {
    timeRepresentation = `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
  }

  return (
    <div
      css={css`
        text-align: left;
        font: normal normal normal 16px/24px Meiryo;
        letter-spacing: 0px;
        color: #606060;
      `}
    >
      {timeRepresentation}
    </div>
  );
};
