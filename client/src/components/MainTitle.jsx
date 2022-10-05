import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAK_POINT_PHONE } from "../constant";

const MainTitle = () => {
  return (
    <Main>
      <SubText>
        서울에서 반려견과 함께할 수 있는, <br />
        반려견과 소중한 추억을 만들 모든 장소
      </SubText>
      <MainWapper>
        <MainText>Seoul in Petkage</MainText>
      </MainWapper>
      <Buttons>
        <Link to="/place">
          <Button>목록으로 찾기</Button>
        </Link>
        <Link to="/regist">
          <Button color={"#4da772"} border={"#4da772"} bgColor={"#fff"}>
            장소 등록하기
          </Button>
        </Link>
      </Buttons>
    </Main>
  );
};

const Main = styled.div`
  padding-top: 144px;
`;

const SubText = styled.div`
  text-align: center;
  line-height: 150%;
`;

const MainWapper = styled.div`
  height: 80px;
  display: grid;
  place-items: center;
`;

const MainText = styled.div`
  width: 430px;
  animation: typing 2s steps(16), point 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 5px solid #ffb653;
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
  color: #333;

  @keyframes typing {
    0% {
      width: 0;
    }
  }

  @keyframes point {
    50% {
      border-color: transparent;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 300px;
    font-size: 2.05em;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
`;

const Button = styled.div`
  padding: 13px 20px;
  background-color: ${(props) => props.bgColor || " #4da772"};
  color: ${(props) => props.color || " #fff"};
  border-radius: 50px;
  font-size: 13px;
  border: 1px solid #4da772;
`;

export default MainTitle;
