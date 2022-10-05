import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { BREAK_POINT_TABLET } from "../../constant";
import { useDeleteReply, useUpdataReply } from "../../hooks/useAPI";
import usePostReview from "../../store/PostReply";

const Review = ({ reply }) => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [editReply, setEditReply] = useState(reply.context);

  const {
    replyId,
    context,
    score,
    placeId,
    setReplyId,
    setContext,
    setScore,
    setPlaceId,
  } = usePostReview();

  useEffect(() => {
    return () => {
      setReplyId("");
      setContext("");
      setScore("");
      setPlaceId("");
    };
  }, []);

  const config = {
    replyId,
    context,
    score,
    placeId,
  };

  const onUpdate = () => {
    console.log("updateConfig", config);

    const updateReply = useUpdataReply(config, id);
    updateReply()
      .then((res) => console.log(res.data))
      .then(() => setContext(""), setScore(""));

    window.location.reload();
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleUpdate = () => {
    if (!id) return alert("작성자만 수정이 가능합니다.");
    setIsEdit(true);
  };

  const onDelete = () => {
    window.confirm("삭제하시겠습니까?");
    useDeleteReply(id);
    console.log(id);
  };

  return (
    <ReviewItem>
      <ReviewLeft>
        <div className="userInfo">
          <UserImg></UserImg>
          <UserName>{reply.replyId}</UserName>
          <PostDate>2022.09.29</PostDate>
        </div>
        {isEdit ? (
          <EditForm>
            <textarea
              className="editTextarea"
              value={editReply}
              maxLength={300}
              onChange={(e) => setEditReply(e.target.value)}
            />
            <div className="scoreInput">
              평점 ⭐️
              <select
                id="score"
                name="score"
                onChange={(e) => setScore(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="editBtns">
              <span onClick={onUpdate}>수정</span>
              <span onClick={handleCancel}>취소</span>
            </div>
          </EditForm>
        ) : (
          <OriginReply>
            <div className="buttons">
              <div className="button" onClick={handleUpdate}>
                수정
              </div>
              <div className="button" onClick={onDelete}>
                삭제
              </div>
            </div>
            <div className="originScore">
              <Star /> 평점 {reply.score}
            </div>
            <p className="reviewContent">{reply.context}</p>
          </OriginReply>
        )}
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
  .userInfo {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const EditForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  textarea {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #d7e2eb;
    resize: none;
    font-size: 14px;
    color: #333333;
  }
  .scoreInput {
    /* display: flex;
    align-items: center; */
    font-size: 14px;
  }

  span {
    font-size: 14px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s;
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
      font-size: 12px;
    }
  }
`;

const OriginReply = styled.div`
  display: flex;
  .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
    .button {
      font-size: 14px;
      color: #666;
      cursor: pointer;
      transition: all 0.3s;
      @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        font-size: 12px;
      }
    }
  }
  .originScore {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11;
    color: #999;
  }

  p {
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

const UserImg = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: #f5f5f5;
`;

export default Review;
