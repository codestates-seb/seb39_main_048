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

  const onUpdate = (id) => {
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
    window.location.reload();
  };

  return (
    <ReviewItem>
      <ReviewLeft>
        <div className="userInfo">
          <div className="userImg">
            <UserImg></UserImg>
          </div>
          <div className="userDate">
            <div className="userName">{reply.replyId}</div>
            <div className="postDate">2022.09.29</div>
          </div>
        </div>
        {isEdit ? (
          <EditForm>
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
            <textarea
              className="editTextarea"
              value={editReply}
              maxLength={250}
              onChange={(e) => setEditReply(e.target.value)}
            />
            <div className="editBtns">
              <span onClick={onUpdate}>수정</span>
              <span onClick={handleCancel}>취소</span>
            </div>
          </EditForm>
        ) : (
          <OriginReply>
            <div className="originScore">
              <Star /> 평점 {reply.score}
            </div>
            <p className="reviewContent">{reply.context}</p>
            <div className="buttons">
              <div className="button" onClick={handleUpdate}>
                수정
              </div>
              <div className="button" onClick={onDelete}>
                삭제
              </div>
            </div>
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
    width: 50%;
    gap: 20px;

    .userImage {
      display: flex;
    }

    .userDate {
      .userName {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        color: #333;
        font-weight: 600;
        margin-bottom: 6px;
        transition: all 0.3s;
        @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
          font-size: 16px;
        }
      }
      .postDate {
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

const EditForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;
  gap: 15px;

  .scoreInput {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 10%;
    font-size: 14px;
    color: #999;
    select {
      width: 75%;
      @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
        width: 60%;
      }
    }
  }

  .editBtns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 5%;
    span {
      font-size: 14px;
      color: #666;
      cursor: pointer;
      border: 1px solid #d7e2eb;
      padding: 1.5px;
      border-radius: 3px;
      transition: all 0.3s;
      @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        font-size: 12px;
        padding: 0.5px;
      }
    }
  }
  textarea {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 15px;
    width: 100%;
    height: 80px;
    border-radius: 10px;
    border: 1px solid #d7e2eb;
    resize: none;
    font-size: 14px;
    color: #333333;
  }
`;

const OriginReply = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5em;
  gap: 15px;
  width: 100%;
  .originScore {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    color: #999;
    width: 10%;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 5%;
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

  p {
    font-size: 16px;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    color: #333333;
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

const UserImg = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: #f5f5f5;
`;

export default Review;
