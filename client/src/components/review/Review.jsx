import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { BREAK_POINT_TABLET } from "../../constant";

const Review = () => {
  return (
    <ReviewItem>
      <ReviewLeft>
        <div className="topSection">
          <div className="user_buttons">
            <div className="user">
              <UserImg></UserImg>
              <div className="userInfo">
                <UserName>kanghyew0n</UserName>
                <PostDate>2022.09.29</PostDate>
              </div>
            </div>
            <div className="buttons">
              <div className="button">수정</div>
              <div className="button">삭제</div>
            </div>
          </div>
          <Score>
            <Star /> <Star /> <Star /> <Star /> <Star />
          </Score>
        </div>
        <p className="reviewContent">
          케이크 정말 맛있어요~~ 주문해서 바로 픽업했고 디자인도 너무 예쁜데
          맛도 너무 좋아요~전에 홍대 터*힙 여기서 사고 선제작후 냉동보관했다가
          다시 녹여서 주는거 알고 정말 너무 실망해서 여기도 혹시나 하는 맘에
          샀는데 당일 제작 당일 픽업했습니다.. 맛에 또 한번 놀랐구요. 다음
          기념일도 여기로 주문하려고 합니다~ 마케팅만 번지르르하게 하는
          다른데보다는 훨씬 나은거 같네요!!
        </p>
      </ReviewLeft>
    </ReviewItem>
  );
};

const ReviewItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 32px;
  border-bottom: 1px solid #d7e2eb;
`;

const ReviewLeft = styled.div`
  width: 100%;
  .topSection,
  .user_buttons,
  .buttons,
  .user {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .topSection {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .button {
    font-size: 14px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s;
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 12px;
  }
  }
  .reviewContent {
    font-size: 16px;
    color: #333;
    line-height: 150%;
    transition: all 0.3s;
    
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    text-align: left;
    line-height: 1.6em;
    height: 5em;
    
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
      font-size: 14px;
    }
  }
`;

const ReviewRight = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 220px;
  height: 120px;
`;

const UserImg = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: #f5f5f5;
`;

const UserName = styled.div`
  font-size: 18px;
  color: #333;
  font-weight: 600;
  margin-bottom: 6px;
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 16px;
  }
`;

const PostDate = styled.div`
  font-size: 12px;
  color: #999;
`;

const Score = styled.div``;

export default Review;
