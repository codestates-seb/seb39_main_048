import LogoColor from "../assets/LogoColor.png";

import styled from "styled-components";
import IdInput from "../components/input/IdInput";
import PasswordInput from "../components/input/PasswordInput";
import SNSLoginContainer from "../components/SNSLoginContainer";

const Login = () => {
  return (
    <LoginGroup>
    <LoginContainer>
      <img src={LogoColor}></img>
      <div className="LoginTop">
        로그인
        <p>
          <b>서울인 펫키지</b>에 오신 것을 환영합니다
        </p>
      </div>
      <div className="IdPassword">
        <IdInput />
        <PasswordInput />
      </div>
      <button id="LoginBtn">로그인</button>
      <SNSLoginContainer />
      <div className="Lastcomment">
        <p>아직 저희와 가족이 아니신가요?</p>
        <div onClick={() => alert("응~ 아직~ 구현 안 함~")}>회원가입</div>
      </div>
    </LoginContainer>
    </LoginGroup>
  );
};

const LoginGroup = styled.div`
  padding: 144px 0;
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  /* height: 880px; */
  width: 600px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;

  img {
    width: 140px;
    padding: 24px 0;
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
    }
  }

  .IdPassword {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }

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
    margin-bottom: 48px;
  }

  .Lastcomment {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    font-size: 14px;
    gap: 4px;

    div {
      color: blue;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export default Login;
