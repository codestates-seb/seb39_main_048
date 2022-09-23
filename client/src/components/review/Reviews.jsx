import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import BasicButton from "../buttons/BasicButton";
import Review from "./Review";

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
      <Review/>
      <Review/>
      <Review/>
      <Review/>
    </ReviewGroup>
  );
};

const ReviewGroup = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 64px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #D7E2EB;
  border-bottom: 1px solid #D7E2EB;
  padding: 30px 20px;

  .review_score {
    display: flex;
    align-items: center;
    gap: 48px;
  }
`;

const Title = styled.h2`
font-size: 20px;
`;

const Score = styled.div`
  display: flex;
  gap: 6px;
`;

const ScoreText = styled.div`
color: #999;
`;

export default Reviews;
