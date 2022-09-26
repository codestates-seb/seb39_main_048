import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoColor from "../assets/LogoColor.png";
import IdInput from "../components/input/IdInput";
import PasswordInput from "../components/input/PasswordInput";
import SNSLoginContainer from "../components/SNSLoginContainer";
import useSWR from "swr";
import axios from "axios";
import useSignup from "../store/SignupStore";

import styled from "styled-components";

// const fetcher = (url) => axios.get(url).then((res) => res.data);

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
  // const [isJoinSuccess, setJoinSuccess] = useState(false);
  // const [passwordCheck, setPasswordCheck] = useState("");
  // const [passwordCheckMsg, setPasswordCheckMsg] = useState("");
  // const [isPasswordCheck, setIsPasswordCheck] = useState(false);

  // if (pw1 !== pw2) {
  //   alert("비밀번호 불일치");
  // } else {
  //   ("비밀번호 일치");
  // }

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

  const onPasswordCheck =
    (() => {
      if (setPassword === setPasswordCheck) {
        setPasswordCheckMsg("비밀번호 일치");
        setIsPasswordCheck(true);
      } else {
        setPasswordCheckMsg("비밀번호 불일치, 재입력 부탁드립니다.");
        setIsPasswordCheck(false);
      }
    },
    [password]);

  const onRegister = () => {
    axios
      .post("http://localhost:3001/user", {
        id: userId,
        password: password,
        name: name,
      })
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
    navigate(`/login`);
  };

  // const createUserApi = (user) => {
  //   return fetch("/user", {
  //     method: "POST",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/join",
  //     },
  //   })
  //     .then((res) => res.data)
  //     .then((data) => console.log(data));
  // };

  // const onRegister = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await createUserApi({
  //       id: userId,
  //       password: password,
  //       name: name,
  //     });

  //     if (res.result === "ok") {
  //       setJoinSuccess(true);
  //     }
  //   } catch (err) {
  //     console.error("login error", err);
  //     alert("회원가입에 실패하였습니다. 잠시 후 다시 시도해주세요.");
  //   }
  // };

  // const onRegister = () => {
  //   const navigate = useNavigate();

  //   if (isName && isId && isPassword) {
  //     axios
  //       .post("/user", {
  //         userId: userId,
  //         password: password,
  //         name: name,
  //       })
  //       .then((res) => {
  //         if (response.data.code == 0) {
  //           setPopup({
  //             open: true,
  //             title: "Confirm",
  //             message: "Join Success!",
  //             callback: function () {
  //               navigate("/login");
  //             },
  //           });
  //         } else {
  //           let message = res.data.message;
  //           if (res.data.code == 10000) {
  //             message =
  //               "User ID is duplicated. Please enter a different User ID. ";
  //           }
  //           setPopup({
  //             open: true,
  //             title: "Error",
  //             message: message,
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(error);
  //       });
  //   }
  // };

  // const onRegister = () => {
  //   const fetcher = async (url) => {
  //     const res = await axios.post(url);

  //     return res.data;
  //   };

  //   const { data, mutate, } = useSwr(`/api/`, fetcher);

  //   const createItem = async (e) => {
  //     const curCache = data;
  //     mutate( data:[
  //       ...data,
  //       {
  //         name,
  //       }
  //     ])
  //   }
  // };

  // const onRegister = () => {
  //   if (isName && isId && isPassword) {
  //     axios
  //       .post(`/member`, {
  //         id: userId,
  //         password: password,
  //         name: name,
  //       })
  //       .then((res) => res.data)
  //       .then((data) => console.log(data));
  //   }
  // };
  // const onRegister = () => {
  //   if (isName && isId && isPassword) {
  //     axios
  //       .post(`/member`, {
  //         id: id,
  //         password: password,
  //         name: name,
  //       })
  //       .then((res) => res.data)
  //       .then((data) => console.log(data));
  //     navigate(`/login`);
  //   }
  // };

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
                maxlength="6"
                minlength="2"
                placeholder="6글자 이하 별명을 입력해 주세요"
                onChange={handleNameValid}
              ></input>
              <div className="ValidCheck">{nameMessage}</div>
            </label>
          </div>
          <PasswordInput
            id="pw1"
            title="비밀번호"
            placeholder="영문 소문자, 숫자 포함 8자 이상 14자 이하"
            onChange={onPasswordCheck}
          />
          <PasswordInput
            id="pw2"
            title="비밀번호 확인"
            placeholder="비밀번호를 확인해 주세요"
            onChange={onPasswordCheck}
          />
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