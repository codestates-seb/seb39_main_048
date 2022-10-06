import React from "react";
import styled from "styled-components";
import useMenu from "../../store/MenuStore";
import MypageReview from "../review/MypageReview";
import { BREAK_POINT_TABLET } from "../../constant";
import { useGetMypageData } from "../../hooks/useAPI";
<<<<<<< HEAD
=======
import Loading from "../../components/ui/Loading"
>>>>>>> 5ef896edf001fbf98031bee0bafd2e9251779fde

const MyReview = () => {
  const { menu } = useMenu();
  const { data, isLoading, isError } = useGetMypageData("/api/v1/mypage/reply");

  console.log("mypage data : ",data)

  if (isLoading) return <Loading/>
  if (isError) return <div>ERR...</div>;
  return (
    <Myreview>
      <Title> {menu}</Title>
      <ReviewGroup>
        <MypageReview data={data.data}/>
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
