import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import BasicButton from "../buttons/BasicButton";
import Review from "./Review";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useGetReply, usePostReply } from "../../hooks/useAPI";
import usePostReview from "../../store/PostReply";

const notify = () => toast.success(" 후기가 등록되었습니다 🦮");

const Reviews = ({ scoreAvg }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetReply(id);
  const { replyLength, setReplyLength } = usePostReview();

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

  useEffect(() => {
    if (data) {
      setReplyLength(data.data.length);
    }
  }, [data]);

  const config = {
    replyId,
    context,
    score,
    placeId: id,
  };

  const handleSubmit = async (e) => {
    if (context.length === 0) {
      e.stopPropagation();
      // alert("내용을 입력해주세요.");
      return toast.error("내용을 입력해 주세요.📝");
    }
    if (!score) {
      return toast.error("평점을 선택해 주세요.📝");
    }
    console.log("config", config);
    const postReply = usePostReply(config, id);
    postReply().then((res) => console.log(res.data));

    window.location.reload(`/place/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  return (
    <ReviewGroup>
      <TopSection>
        <div className="review_score">
          <Title>후기 {data.data.length}</Title>
          <Score>
            <Star />
            <ScoreText>{scoreAvg}</ScoreText>
          </Score>
        </div>
        <div className="createReply">
          <textarea
            value={context}
            placeholder="후기를 입력해 주세요"
            maxLength={250}
            onChange={(e) => setContext(e.target.value)}
          />
          <div className="scoreInput">
            평점 ⭐️
            <select
              id="score"
              name="score"
              onChange={(e) => setScore(e.target.value)}
            >
              <option value="">선택</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="createBtn">
            <BasicButton
              text={"등록"}
              handleClick={notify}
              onCreate={handleSubmit}
            />
            <Toaster />
          </div>
        </div>
      </TopSection>
      <Reply>
        {data.data &&
          data.data.map((reply) => (
            <Review key={reply.replyId} reply={reply} />
          ))}
      </Reply>
    </ReviewGroup>
  );
};

const ReviewGroup = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 64px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d7e2eb;
  border-bottom: 1px solid #d7e2eb;
  padding: 20px 20px;
  width: 100%;
  gap: 50px;

  .review_score {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 10%;
    gap: 20px;
  }
  .createReply {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    gap: 20px;
    textarea {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 15px;
      width: 90%;
      height: 80px;
      border-radius: 10px;
      border: 1px solid #d7e2eb;
      resize: none;
      font-size: 14px;
      color: #333333;
    }
    .scoreInput {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      font-size: 14px;
      width: 20%;
      gap: 10px;
    }
    .createBtn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 15%;
    }
  }
`;

const Reply = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
