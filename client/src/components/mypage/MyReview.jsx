import React from "react";
import styled from "styled-components";
import useMenu from "../../store/MenuStore";
import MypageReview from "../review/MypageReview";
import { BREAK_POINT_TABLET } from "../../constant";
import EmptyData from "../ui/EmptyData";

const MyReview = ({ data }) => {
  const { menu } = useMenu();

  return (
    <Myreview>
      <Title> {menu}</Title>
      <ReviewGroup>
        {data.data.length ? data.data.map((data, idx) => (
          <MypageReview key={idx} reply={data} />
        )) : <EmptyData  width={"100%"} text={"아직 등록한 후기가 없어요"}/>}
      </ReviewGroup>
    </Myreview>
  );
};

const Myreview = styled.div`
  padding-top: 144px;
  width: 100%;
  margin-bottom: 48px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding-top: 20px;
    margin-bottom: 48px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin-bottom: 16px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const ReviewGroup = styled.div``;

export default MyReview;
