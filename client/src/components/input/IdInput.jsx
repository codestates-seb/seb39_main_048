import styled from "styled-components";

const IdInput = ({ placeholder }) => {
  return (
    <Id>
      <label>
        <p>아이디</p>
        <input
          type="text"
          maxlength="12"
          minlength="6"
          placeholder={placeholder}
        ></input>
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
`;

export default IdInput;
