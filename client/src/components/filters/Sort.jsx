import React from "react";
import styled from "styled-components";
import { ReactComponent as SortIcon } from "../../assets/SortIcon.svg";
import { BREAK_POINT_TABLET } from "../../constant";

const Sort = () => {
  return (
    <SortContainer>
      <SortGroup>
        <span>Sort</span>
        <SortIcon />
      </SortGroup>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  position: relative;
`;

const SortGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 17px 32px;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  color: #333;
  font-size: 14px;
  transition: all 0.3s;
  background-color: ${(props) => props.bgcolor || "#fff"};
  cursor: pointer;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding: 12px 15px;
    font-size: 12px;
    gap: 8px;
  }
`;

export default Sort;
