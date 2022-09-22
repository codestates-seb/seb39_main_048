import styled from "styled-components";

const PasswordInput = () => {
  return (
    <Password>
      <label>
        <p>비밀번호</p>
        <input
          type="password"
          maxlength="14"
          minlength="8"
          placeholder="비밀번호를 입력해 주세요"
        ></input>
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
`;

export default PasswordInput;
