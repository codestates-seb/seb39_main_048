import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoColor from "../assets/LogoColor.png";
import IdInput from "../components/input/IdInput";
import PasswordInput from "../components/input/PasswordInput";
import SNSLoginContainer from "../components/buttons/SNSLoginContainer";
import axios from "axios";
import useSignup from "../store/SignupStore";
import axiosInstance from "../api/core/axiosConfig";

import styled from "styled-components";

const Signup = () => {
  const {
    setUserId,
    setIsId,
    isId,
    userId,
    password,
    isPassword,
    setPassword,
    setIsPassword,
    passwordCheck,
    setPasswordCheck,
    passwordCheckMsg,
    setPasswordCheckMsg,
    isPasswordCheck,
    setIsPasswordCheck,
  } = useSignup();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [isName, setIsName] = useState(false);

  const handleNameValid = (e) => {
    const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]{1,6}$/;

    if (e.target.value.length === 0) {
      setNameMessage(`이름을 채워주세요.`);
    } else if (!nameRegex.test(e.target.value)) {
      setNameMessage(`${e.target.value} 이름이 올바르지 않습니다.`);
    } else {
      setNameMessage(``);
      setName(e.target.value);
      setIsName(true);
    }
  };

  const handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    if (password !== e.target.value) {
      setPasswordCheckMsg("비밀번호 불일치, 재입력 부탁드립니다.");
      setIsPasswordCheck(false);
    } else if (password === e.target.value && e.target.value.length !== 0) {
      setPasswordCheckMsg("비밀번호 일치");
      setIsPasswordCheck(true);
    }
    console.log(password);
    console.log(e.target.value);
  };

  const onRegister = () => {
    if (isPasswordCheck && isId && isPassword && isName) {
      axios

        .post("http://175.121.124.2:8080/api/v1/user/signup", {
          userId: userId,
          password: password,
          name: name,
        })
        .then((res) => res.data)
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err.data);
        });
      navigate(`/login`);
    } else {
      console.log("안됨");
    }
    console.log(userId, password, name);
  };

  useEffect(() => {
    return () => {
      setIsId("");
      setIsPasswordCheck(false);
      setPasswordCheckMsg("");
    };
  }, []);
  return (
    <SingupPage>
      <div className="Container">
        <img src={LogoColor}></img>
        <div className="SignupTop">회원가입</div>
        <div className="AlreadyLogin">
          <p>이미 회원이신가요?</p>
          <Link to="/login">
            <div>로그인</div>
          </Link>
        </div>
        <div className="UserInfo">
          <IdInput placeholder="아이디를 입력해 주세요(영문, 6자 이상 12자 이하)" />
          <div className="NameInput">
            <label>
              <p>이름</p>
              <input
                type="text"
                maxLength="6"
                minLength="2"
                placeholder="6글자 이하 별명을 입력해 주세요"
                onChange={handleNameValid}
              ></input>
              <div className="ValidCheck">{nameMessage}</div>
            </label>
          </div>
          <PasswordInput
            title="비밀번호"
            placeholder="영문 소문자, 숫자 포함 8자 이상 14자 이하"
          />
          {/* <PasswordInput
            id="pw2"
            title="비밀번호 확인"
            placeholder="비밀번호를 확인해 주세요"
            onChange={onPasswordCheck}
          /> */}
          <div className="PasswordCheckInput">
            <label>
              <p>비밀번호 확인</p>
              <input
                placeholder="비밀번호를 확인해 주세요"
                type="password"
                maxLength="14"
                minLength="8"
                onChange={handlePasswordCheck}
              ></input>
              <div className="ValidCheck">{passwordCheckMsg}</div>
            </label>
          </div>
        </div>
        <div className="LoginBtns">
          <button id="LoginBtn" onClick={onRegister}>
            계속하기
          </button>
          <SNSLoginContainer />
        </div>
      </div>
    </SingupPage>
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
        .ValidCheck {
          font-size: 11px;
          color: #4da771;
          margin-top: 4px;
          white-space: normal;
        }
      }
      .PasswordCheckInput {
        p {
          color: #333333;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 6px;
        }

        input {
          background-image: url("https://img.icons8.com/ios/50/999999/password--v1.png");
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
        .ValidCheck {
          font-size: 11px;
          color: #4da771;
          margin-top: 4px;
          white-space: normal;
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
        cursor: pointer;
      }
    }
  }
`;

export default Signup;
