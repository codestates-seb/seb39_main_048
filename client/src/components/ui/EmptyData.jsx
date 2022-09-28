import React from "react";
import styled from "styled-components";

const EmptyData = () => {
  return (
    <Empty>
      <div>｡°(°´ᯅ`°)°｡</div>
      <div>검색하신 장소를 찾을 수가 없어요</div>
    </Empty>
  );
};

const Empty = styled.div`
  width: 100%;
  color: #b8bdb9;
  font-size: 14px;
  font-weight: 600;
  background-color: #f5f5f5;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  grid-row-gap: 24px;
   div{
    &:first-child {
      font-size: 48px;
    }
   }
`;

export default EmptyData;
