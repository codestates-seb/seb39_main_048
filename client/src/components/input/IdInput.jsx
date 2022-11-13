import { useState } from "react";
import styled from "styled-components";
import useSignup from "../../store/SignupStore";

const IdInput = ({ placeholder }) => {
  // const [userId, setUserId] = useState("");
  const [idMessage, setIdMessage] = useState("");
  // const [isId, setIsId] = useState(false);

  const { setUserId, setIsId } = useSignup();

  const handleIdValid = (e) => {
    // 영문 6~12자
    const IdRegex = /^[a-z|A-Z]{6,12}$/;

    if (e.target.value.length <= 5) {
      setIdMessage(`6~12자 영문 아이디를 적어주세요.`);
    } else if (!IdRegex.test(e.target.value)) {
      setIdMessage(`${e.target.value} 아이디가 올바르지 않습니다.`);
    } else {
      setIdMessage(``);
      setUserId(e.target.value);
      setIsId(true);
    }
  };

  return (
    <Id>
      <label>
        <p>아이디</p>
        <input
          type="text"
          maxLength="12"
          minLength="6"
          placeholder={placeholder}
          onChange={handleIdValid}
        ></input>
        <div className="ValidCheck">{idMessage}</div>
      </label>
    </Id>
  );
};

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

export default IdInput;
