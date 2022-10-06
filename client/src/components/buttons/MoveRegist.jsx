import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAK_POINT_PHONE } from "../../constant";
import { ReactComponent as Plus } from "../../assets/Plus-lg.svg";

const MoveRegist = () => {
  return (
    <Link to="/regist">
      <Button>
        <Plus />
      </Button>
    </Link>
  );
};

const Button = styled.div`
  position: sticky;
  bottom: 5%;
  left: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-color: #4da772;
  filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 0px 8px);
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    bottom: 5%;
    left: 80%;
    width: 40px;
    height: 40px;
    margin: 0;
  }
`;

export default MoveRegist;
