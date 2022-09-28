import { useState } from "react";
import useSignup from "../../store/SignupStore";
import styled from "styled-components";

const PasswordInput = ({ title, placeholder }) => {
  const [passwordMessage, setPasswordMessage] = useState("");

  const { password, isPassword, setPassword, setIsPassword } = useSignup();

  const handlePasswordValid = (e) => {
    // 8~14자 이하 영문 소문자, 숫자 조합
    const passwordRegex = /^[a-z|0-9]{8,14}$/;

    if (e.target.value.length <= 7) {
      setPasswordMessage(`비밀번호를 채워주세요.`);
    } else if (!passwordRegex.test(e.target.value)) {
      setPasswordMessage("영문 소문자, 숫자 조합 8~14자 입력해 주세요.");
    } else {
      setPasswordMessage(``);
      setPassword(e.target.value);
      setIsPassword(true);
    }
  };

  return (
    <Password>
      <label>
        <p>{title}</p>

        <input
          type="password"
          maxLength="14"
          minLength="8"
          placeholder={placeholder}
          onChange={handlePasswordValid}
        ></input>
        <div className="ValidCheck">{passwordMessage}</div>
      </label>
    </Password>
  );
};

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

export default PasswordInput;
