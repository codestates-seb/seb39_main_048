import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { BREAK_POINT_TABLET } from "../../constant";
import { BREAK_POINT_TABLET_MINI } from "../../constant";

const MypageReview = ({ data }) => {
  return (
    <ReviewItem>
      <ReviewLeft>
        <div className="topSection">
          <div className="user_buttons">
            <PlaceName>{data.name} 〉</PlaceName>
            <div className="buttons">
              <div className="button">수정</div>
              <div className="button">삭제</div>
            </div>
          </div>
          <Score>
            <Star /> {data.score}
          </Score>
        </div>
        <PostDate>2022.09.29</PostDate>
        <p className="reviewContent">
          {data.context}
        </p>
      </ReviewLeft>
      <ReviewRight></ReviewRight>
    </ReviewItem>
  );
};

const ReviewItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 32px;
  border-top: 1px solid #d7e2eb;
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding: 20px 0;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    gap: 10px;
  }
`;

const ReviewLeft = styled.div`
  width: 100%;
  transition: all 0.3s;

  .topSection,
  .user_buttons,
  .user {
    display: flex;
    align-items: center;
    gap: 20px;
    @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
      gap: 0;
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
      gap: 5;
      margin-top: 5px;
    }
  }

  .topSection {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .button {
    font-size: 12px;
    color: #666;
    cursor: pointer;
  }
  .reviewContent {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    text-align: left;
    line-height: 1em;
    height: 3em;

    font-size: 14px;
    color: #333;
    line-height: 150%;
    transition: all 0.3s;
    @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    .user_buttons {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }
`;

const ReviewRight = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 200px;
  height: 100px;
`;

const PlaceName = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #4da772;
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

const PostDate = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

const Score = styled.div``;

export default MypageReview;
