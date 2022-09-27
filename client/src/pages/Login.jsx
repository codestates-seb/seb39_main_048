import React from "react";
import { Link } from "react-router-dom";
import LogoColor from "../assets/LogoColor.png";
import SNSLoginContainer from "../components/buttons/SNSLoginContainer";
import axios from "axios";
import styled from "styled-components";
import useLogin from "../store/LoginStore";

const Login = () => {
  const { userId, password, setUserId, setPassword } = useLogin();

  const onLogin = () => {
    try {
      let data = { userId };
      axios
        .post(
          "http://localhost:3001/user",
          {
            userId: userId,
            password: password,
          },
          {
            headers: {
              "Content-Type": `application/json`,
            },
          }
        )
        .then((res) => {
          console.log("res.data.accessToken : " + res.data);
          axios.defaults.headers.common["Authorization"] = "Bearer " + res.data;
        })
        .catch((err) => {
          console.log("login requset fail : " + err);
        })
        .finally(() => {
          console.log("login request end");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginPage>
      <div className="Container">
        <img src={LogoColor}></img>
        <div className="LoginTop">
          로그인
          <p>
            <b>서울인 펫키지</b>에 오신 것을 환영합니다
          </p>
        </div>
        <div className="IdPassword">
          {/* <IdInput placeholder="아이디를 입력해 주세요" />
          <PasswordInput
            title="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
          /> */}
          <Id>
            <label>
              <p>아이디</p>
              <input
                type="text"
                maxlength="12"
                minlength="6"
                placeholder="아이디를 입력해 주세요"
                onChange={(e) => setUserId(e.target.value)}
              ></input>
            </label>
          </Id>
          <Password>
            <label>
              <p>비밀번호</p>
              <input
                type="password"
                maxlength="14"
                minlength="8"
                placeholder="영문 소문자, 숫자 포함 8자 이상 14자 이하"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
          </Password>
        </div>
        <div className="LoginBtns">
          <button id="LoginBtn" onClick={onLogin}>
            로그인
          </button>
          <SNSLoginContainer />
        </div>
        <div className="Lastcomment">
          <p>아직 저희와 가족이 아니신가요?</p>
          <Link to="/signup">
            <div>회원가입</div>
          </Link>
        </div>
      </div>
    </LoginPage>
  );
};

const LoginPage = styled.div`
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
    height: 900px;
    width: 600px;
    margin: 150px 0;

    img {
      width: 140px;
      padding-top: 24px;
      padding-bottom: 24px;
    }

    .LoginTop {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #333333;
      font-size: 28px;
      font-weight: 600;
      gap: 12px;

      p {
        color: #333333;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 80px;
      }
    }

    .IdPassword {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 24px;
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

    .Lastcomment {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333333;
      padding-top: 100px;
      padding-bottom: 24px;
      font-size: 14px;
      gap: 4px;

      div {
        color: blue;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;

const Id = styled.div`
  p {
    color: #333333;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  input {
    background-image: url("https://img.icons8.com/material-outlined/100/999999/person-male.png");
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
`;

const Password = styled.div`
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
`;

export default Login;
