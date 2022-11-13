import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ToastInfo } from "../../constant";
import toast, { Toaster } from "react-hot-toast";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { ReactComponent as UserImg } from "../../assets/UserImg.svg";
import { BREAK_POINT_TABLET } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";
import { useDeleteReply, useUpdataReply } from "../../hooks/useAPI";
import usePostReview from "../../store/PostReply";
import useMamber from "../../store/MemberStore";
import { useGetMyInfo } from "../../hooks/useAPI";
import Loading from "../ui/Loading";
import jwt_decode from "jwt-decode";

const Review = ({ reply }) => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [editReply, setEditReply] = useState(reply.context);
  const [editScore, setEditScore] = useState(reply.score);
  const { setReplyId, setContext, setScore, setPlaceId } = usePostReview();
  const { user, setUser } = useMamber();

  console.log("user", user)

  useEffect(() => {
    return () => {
      setReplyId("");
      setContext("");
      setScore("");
      setPlaceId("");
    };
  }, []);

  useEffect(() => {
      const decoded = jwt_decode(localStorage.getItem("access_Token"));
      setUser(decoded.userId);
  }, []);

  const { data, isLoading, isError } = useGetMyInfo();
  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;

  const config = {
    replyId: reply.replyId,
    context: editReply,
    score: editScore,
  };

  const onUpdate = () => {
    console.log("updateConfig", config);
    if (!editScore) {
      toast("평점을 선택해 주세요!", { icon: "📝", ...ToastInfo });
      return;
    }
    const updateReply = useUpdataReply(config, id, reply.replyId);
    updateReply()
      .then((res) => console.log(res))
      .then(() => setContext(""), setScore(""));
    setIsEdit(false);
    // window.location.reload();
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleUpdate = () => {
    if (!id) return alert("작성자만 수정이 가능합니다.");
    setIsEdit(true);
  };

  const onDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      useDeleteReply(reply.replyId);
      console.log(reply.replyId);
    }
  };

  return (
    <ReviewItem>
      <Toaster />
      <ReviewLeft>
        <div className="userInfo">
          <div className="user">
            <User>
              {data.data.userImage ? (
                <img src={data.data.userImage} />
              ) : (
                <UserImg />
              )}
            </User>
            <div className="userDate">
              <div className="userName">{reply.userId}</div>
              <div className="postDate">2022.09.29</div>
            </div>
          </div>
          {!isEdit ? (
            <div className="originScore">
              <Star /> 평점 {reply.score ? reply.score : 1}
            </div>
          ) : (
            <div className="scoreInput">
              <span>평점</span>
              <select
                id="score"
                name="score"
                value={editScore}
                onChange={(e) => setEditScore(e.target.value)}
              >
                <option value="">선택</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          )}
        </div>
        {isEdit ? (
          <EditForm>
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
            <p className="reviewContent">{reply.context}</p>
            {user === reply.userId ? (
              <div className="buttons">
                <div className="button" onClick={handleUpdate}>
                  수정
                </div>
                <div className="button" onClick={onDelete}>
                  삭제
                </div>
              </div>
            ) : (
              ""
            )}
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

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 20px 0;
  }
`;

const ReviewLeft = styled.div`
  width: 100%;
  .userInfo {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .user {
      display: flex;
      gap: 12px;
    }

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

    .originScore {
      font-size: 14px;
      display: flex;
      gap: 5px;
      align-items: center;
    }

    .scoreInput {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #999;

      span {
        font-size: 12px;
      }
    }
  }
`;

const EditForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

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
  }
  .buttons {
    width: 30px;
    .button {
      font-size: 14px;
      color: #666;
      cursor: pointer;
      margin: 10px 0;
      transition: all 0.3s;
      width: 100%;
      text-align: center;
      @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
        font-size: 12px;
      }
    }
  }

  p {
    font-size: 16px;
    width: 100%;
    color: #333333;
    transition: all 0.3s;
    overflow: hidden;
    text-align: left;
    line-height: 150%;
    margin-top: 12px;

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    .button {
      margin: 5px 0;
    }
  }
`;

const User = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f5f5f5;
  img {
    width: 44px;
    height: 44px;
    border-radius: 50px;
  }
`;

export default Review;
