import React from "react";
import styled from "styled-components";

import LogoColor from "../assets/LogoColor.png";
import IdInput from "../components/input/IdInput";
import PasswordInput from "../components/input/PasswordInput";
import SNSLoginContainer from "../components/SNSLoginContainer";

const Signup = () => {
  return (
    <>
      <SingupPage>
        <div className="Container">
          <img src={LogoColor}></img>
          <div className="SignupTop">회원가입</div>
          <div className="AlreadyLogin">
            <p>이미 회원이신가요?</p>
            <div onClick={() => alert("응~ 아직~ 구현 안 함~")}>로그인</div>
          </div>
          <div className="UserInfo">
            <IdInput
              placeholder={"아이디를 입력해 주세요(영문, 6자 이상 12자 이하)"}
            />
            <div className="NameInput">
              <label>
                <p>이름</p>
                <input
                  type="text"
                  maxlength="6"
                  minlength="2"
                  placeholder="별명을 입력해 주세요"
                ></input>
              </label>
            </div>
            <PasswordInput
              title="비밀번호"
              placeholder="영문, 숫자 포함 8자 이상 14자 이하"
            />
            <PasswordInput
              title="비밀번호 확인"
              placeholder="비밀번호를 확인해 주세요"
            />
          </div>
          <div className="LoginBtns">
            <button id="LoginBtn">로그인</button>
            <SNSLoginContainer />
          </div>
        </div>
      </SingupPage>
    </>
  );
};

const SingupPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d7e2eb;
    border-radius: 50px;
    height: 1000px;
    width: 600px;
    margin: 150px 0;

    img {
      width: 140px;
      padding-bottom: 24px;
    }

    .SignupTop {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #333333;
      font-size: 28px;
      font-weight: 600;
    }

    .AlreadyLogin {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333333;
      padding-top: 12px;
      padding-bottom: 80px;
      font-size: 14px;
      gap: 4px;

      div {
        color: blue;
        font-weight: 600;
        cursor: pointer;
      }
    }

    .UserInfo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 24px;

      .NameInput {
        p {
          color: #333333;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 6px;
        }
        input {
          background-image: url("https://img.icons8.com/material-outlined/24/999999/edit-user-male.png");
          color: #666666;
          border: 1px solid #d7e2eb;
          border-radius: 50px;
          height: 48px;
          width: 500px;
          background-size: 20px;
          background-position: 24px 12px;
          background-repeat: no-repeat;
          text-align: left;
          text-indent: 52px;
          font-size: 16px;
        }
      }
    }

    .LoginBtns {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 48px;

      #LoginBtn {
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        background-color: #4da772;
        border: 0px solid transparent;
        border-radius: 50px;
        height: 48px;
        width: 500px;
        margin-top: 24px;
      }
    }
  }
`;

export default Signup;
