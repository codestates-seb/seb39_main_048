import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { BREAK_POINT_TABLET } from "../../constant";

const Review = ({ reply }) => {
  const { id } = useParams();

  return (
    <ReviewItem>
      <ReviewLeft>
        <div className="topSection">
          <div className="user_buttons">
            <div className="user">
              <UserImg></UserImg>
              <div className="userInfo">
                <UserName>{reply.replyId}</UserName>
                <PostDate>2022.09.29</PostDate>
              </div>
            </div>
            <div className="buttons">
              <div className="button">수정</div>
              <div className="button">삭제</div>
            </div>
          </div>
          <Score>
            <Star /> 평점 {reply.score}
          </Score>
        </div>
        <p className="reviewContent">{reply.context}</p>
      </ReviewLeft>
      {/* <ReviewRight></ReviewRight> */}
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

const Score = styled.div`
  font-size: 11;
  color: #999;
`;

export default Review;
