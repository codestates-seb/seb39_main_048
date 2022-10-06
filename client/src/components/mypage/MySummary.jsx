import React from "react";
import styled from "styled-components";
import PlaceCard1 from "../cards/PlaceCard1";
import { BREAK_POINT_TABLET } from "../../constant";

const MySummary = () => {
  return (
    <Summary>

      <Myplace>
        <Info>
          <h2>내가 등록한 장소</h2>
          <span>더보기</span>
        </Info>
        <MyplaceCards>
          {/* <PlaceCard1 />
          <PlaceCard1 />
          <PlaceCard1 /> */}
        </MyplaceCards>
      </Myplace>
      <MyReview>
        <Info>
          <h2>내가 작성한 후기</h2>
          <span>더보기</span>
        </Info>
        <MyReviewCards></MyReviewCards>
      </MyReview>
    </Summary>
  );
};

const Summary = styled.div`
  padding-top: 144px;
  width: 100%;

  h2 {
    font-size: 18px;
    color: #333;
    font-weight: 500;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    color: #666;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding-top: 20px;
    margin-bottom: 48px;
    h2 {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

const Myplace = styled.div`
  margin-bottom: 48px;
`;

const MyplaceCards = styled.div`
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const MyReview = styled.div``;

const MyReviewCards = styled.div``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MySummary;
