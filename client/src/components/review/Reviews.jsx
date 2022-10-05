import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import BasicButton from "../buttons/BasicButton";
import Review from "./Review";
import { BREAK_POINT_TABLET_MINI } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";

const Reviews = () => {
  return (
    <ReviewGroup>
      <TopSection>
        <div className="review_score">
          <Title>후기 6</Title>
          <Score>
            <Star />
            <ScoreText>평점 4.8</ScoreText>
          </Score>
        </div>

        <BasicButton text={"등록"} />
      </TopSection>
      <Review />
      <Review />
      <Review />
      <Review />
    </ReviewGroup>
  );
};

const ReviewGroup = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 64px;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 0 5%;
  }
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d7e2eb;
  border-bottom: 1px solid #d7e2eb;
  padding: 30px 20px;
  transition: all 0.3s;

  .review_score {
    display: flex;
    align-items: center;
    gap: 48px;
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 15px 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 16px;
  }
`;

const Score = styled.div`
  display: flex;
  gap: 6px;
`;

const ScoreText = styled.div`
  color: #999;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 14px;
  }
`;

export default Reviews;
