import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import BasicButton from "../buttons/BasicButton";
import Review from "./Review";
import { ToastInfo } from "../../constant";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useGetReply, usePostReply } from "../../hooks/useAPI";
import usePostReview from "../../store/PostReply";
import { BREAK_POINT_PHONE } from "../../constant";
import EmptyData from "../ui/EmptyData";

const notify = () => toast.success(" 후기가 등록되었습니다 🦮");

const Reviews = ({ scoreAvg }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetReply(id);
  const { setReplyLength } = usePostReview();

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
      return toast("내용을 입력해주세요!!", { icon: "📝", ...ToastInfo });
    }
    if (!score) {
      return toast("평점을 선택해 주세요!", { icon: "⭐️", ...ToastInfo });
    }
    console.log("config", config);
    const postReply = usePostReply(config, id);
    postReply().then((res) => console.log(res));
    // window.location.reload();
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
          <div className="scoreInput">
            <span>평점</span>

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
          <div className="submitForm">
            <textarea
              value={context}
              placeholder="후기를 입력해 주세요."
              maxLength={134}
              onChange={(e) => setContext(e.target.value)}
            />
            <div className="createBtn">
              <BasicButton
                text={"등록"}
                handleClick={notify}
                onCreate={handleSubmit}
              />
              <Toaster />
            </div>
          </div>
        </div>
      </TopSection>
      <Reply>
        {data.data &&
          data.data.map((reply) => (
            <Review key={reply.replyId} reply={reply} />
          ))}

          {data.data.length === 0 ? <EmptyData text={"아직 등록된 후기가 없어요."}/> : ""}
      </Reply>
    </ReviewGroup>
  );
};

const ReviewGroup = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 64px;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 0 5%;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #d7e2eb;
  border-bottom: 1px solid #d7e2eb;
  padding: 20px 20px;
  width: 100%;
  gap: 24px;

  .createReply {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex: 8;
    .scoreInput {
      display: flex;
      align-items: center;
      font-size: 14px;
      gap: 10px;

      span { 
        width : 25px;
      }
    }

    .submitForm {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      gap: 10px;
    }
    textarea {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 15px;
      height: 60px;
      border-radius: 10px;
      border: 1px solid #d7e2eb;
      resize: none;
      font-size: 14px;
      color: #333333;
      width: 100%;
    }
    .createBtn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 15%;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    display: block;
    padding: 20px 0;
    width: 100%;
    gap: 0px;

    .review_score {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: row;
      width: 100%;
      gap: 16px;
    }

    .createReply {
      display: block;
      width: 100%;
      gap: 0px;

      textarea {
        width: 100%;
      }

      .scoreInput {
        width: 100%;
        display: flex;
        justify-content: end;
        margin-bottom: 12px;
      }
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
  margin-bottom: 5px;
`;

const Score = styled.div`
  display: flex;
  gap: 6px;
`;

const ScoreText = styled.div`
  color: #999;
`;

export default Reviews;
