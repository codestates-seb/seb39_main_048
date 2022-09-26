import { Link } from "react-router-dom";
import LogoColor from "../assets/LogoColor.png";
import styled from "styled-components";
import IdInput from "../components/input/IdInput";
import PasswordInput from "../components/input/PasswordInput";
import SNSLoginContainer from "../components/SNSLoginContainer";

const Login = () => {
  const onLogin = ({ userId, password }) => {
    if (userId === "russ" && password === "whynot0") {
      return {
        access_token: "jx84e3kjew1njej3al2q9w",
        refresh_token: "g2rjfd7452bjfgn;a&*(jkehj",
      };
    } else {
      return undefined;
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
          <IdInput placeholder="아이디를 입력해 주세요" />
          <PasswordInput
            title="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
          />
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

export default Login;
