import React from "react";
import styled from "styled-components";

const EmptyData = () => {
  return (
    <Empty>
      <div>｡°(°´ᯅ`°)°｡</div>
      <div>장소를 찾을 수가 없어요</div>
    </Empty>
  );
};

const Empty = styled.div`
<<<<<<< HEAD
  width: 100%;
=======
  width: 80vw;
  max-width: 1280px;
>>>>>>> 5ef896edf001fbf98031bee0bafd2e9251779fde
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
