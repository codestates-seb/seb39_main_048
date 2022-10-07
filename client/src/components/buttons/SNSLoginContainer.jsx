import React from "react";
import styled from "styled-components";

import SNSBtns from "./SNSBtns";
import { ReactComponent as GoogleLogo } from "../../assets/SNSLogin/GoogleLogo.svg";
import { ReactComponent as KakaoLogo } from "../../assets/SNSLogin/KakaoLogo.svg";
import toast, { Toaster } from "react-hot-toast";
import { ToastInfo } from "../../constant";

const SNSLoginContainer = () => {
  const handleMap = () => {
    return toast("공사중  입나다", { icon: "🚧", ...ToastInfo });
  };

  return (
    <SNSBtnContainer>
      <div>
        <div className="LeftBar"></div>
        <div className="Or">또는</div>
        <div className="RightBar"></div>
      </div>
      <p>다른 계정으로 로그인 하기</p>
      <div className="SNSButtons">
        <SNSBtns
          text={"Google"}
          onClick={handleMap}
          type={"Google"}
          svg={<GoogleLogo />}
        ></SNSBtns>
        <SNSBtns
          text={"Kakao"}
          onClick={handleMap}
          type={"Kakao"}
          svg={<KakaoLogo />}
        ></SNSBtns>
      </div>
    </SNSBtnContainer>
  );
};

const SNSBtnContainer = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin-bottom: 6px;

    .Or {
      font-size: 12px;
      color: #999999;
    }

    .LeftBar,
    .RightBar {
      background: #d7e2eb;
      width: 400%;
      border: 0.5px solid #d7e2eb;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #333333;
  }

  .SNSButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 24px;
    gap: 24px;
  }
`;

export default SNSLoginContainer;
