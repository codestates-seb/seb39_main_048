import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import BasicButton from "../buttons/BasicButton";
import Review from "./Review";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGetReply } from "../../hooks/useAPI";

const notify = () => toast.success(" 후기가 등록되었습니다 🦮");

const Reviews = ({ setIsChange, isChange }) => {
  const [context, setContext] = useState("");
  const { id } = useParams();
  const { data, isLoading, isError } = useGetReply();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(context);
    if (!context.length) {
      e.preventDefault();
      alert("내용을 입력해주세요.");
      return;
    }

    axios
      .post(`http://localhost:3001/reply`, {
        context: context,
        replyId: replyId,
        placeId: Number(id),
      })
      .then((res) => res.data)
      .then((data) => console.log("reply", data));
    setContext("");
    setIsChange(!isChange);
  };

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
        <div className="createReply">
          <textarea
            value={context}
            placeholder="후기를 입력해 주세요"
            maxLength={300}
            onChange={(e) => setContext(e.target.value)}
          />
          <div className="createBtn">
            <BasicButton
              text={"등록"}
              isOpen={notify}
              onCreate={handleSubmit}
            />
            <Toaster />
          </div>
        </div>
      </TopSection>
      <Reply>
        {data && data.map((reply) => <Review key={reply.id} reply={reply} />)}
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
