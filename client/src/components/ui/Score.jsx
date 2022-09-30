import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";

const Score = () => {
  return (
    <StarGroup>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </StarGroup>
  );
};

const StarGroup = styled.div`
display: flex;
gap: 6px;
`;

export default Score;
