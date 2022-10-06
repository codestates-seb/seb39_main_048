import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <div className="red"></div>
      <div className="green"></div>
      <div className="yellow"></div>
      <div className="blue"></div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 100;

  .red,
  .green,
  .yellow,
  .blue {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background-color: black;
    margin: 0 5px;
  }

  .red {
    background-color: #4da772;
    animation: move 1s ease infinite;
  }
  .green {
    background-color: #58ba81;
    animation: move 1s ease infinite;
    animation-delay: 0.2s;
  }
  .yellow {
    background-color: #ffb653;
    animation: move 1s ease infinite;
    animation-delay: 0.4s;
  }
  .blue {
    background-color: #ffd498;
    animation: move 1s ease infinite;
    animation-delay: 0.6s;
  }

  @keyframes move {
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Loading;
