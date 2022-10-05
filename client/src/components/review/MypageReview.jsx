import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { BREAK_POINT_TABLET } from "../../constant";
import { BREAK_POINT_TABLET_MINI } from "../../constant";

const MypageReview = () => {
  return (
    <ReviewItem>
      <ReviewLeft>
        <div className="topSection">
          <div className="user_buttons">
            <PlaceName>챱챱 케이크 〉</PlaceName>
            <div className="buttons">
              <div className="button">수정</div>
              <div className="button">삭제</div>
            </div>
          </div>
          <Score>
            <Star /> <Star /> <Star /> <Star /> <Star />
          </Score>
        </div>
        <PostDate>2022.09.29</PostDate>
        <p className="reviewContent">
          케이크 정말 맛있어요~~ 주문해서 바로 픽업했고 디자인도 너무 예쁜데
          맛도 너무 좋아요~전에 홍대 터*힙 여기서 사고 선제작후 냉동보관했다가
          다시 녹여서 주는거 알고 정말 너무 실망해서 여기도 혹시나 하는 맘에
          샀는데 당일 제작 당일 픽업했습니다.. 맛에 또 한번 놀랐구요.
          업했습니다.. 맛에 또 한번 놀랐구요.
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
