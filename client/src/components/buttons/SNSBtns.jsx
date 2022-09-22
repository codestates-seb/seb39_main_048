import React from "react";
import styled from "styled-components";

const SNSBtns = ({ text, type, svg, onClick }) => {
  return (
    <SNSBtn>
      <button
        className={["SNSBtns", `SNSBtns_${type}`].join(" ")}
        onClick={onClick}
      >
        {svg}
        {text}
      </button>
    </SNSBtn>
  );
};

const SNSBtn = styled.div`
  .SNSBtns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 500px;
  }

  .SNSBtns_Google {
    color: #333333;
    background-color: #ffffff;
    border: 1px solid #d7e2eb;
  }
  .SNSBtns_Kakao {
    color: #333333;
    background-color: #ffe812;
  }
`;

export default SNSBtns;
