import React from "react";
import styled from "styled-components";
import PlaceCard1 from "../cards/PlaceCard1";
import { BREAK_POINT_TABLET } from "../../constant";
import useMenu from "../../store/MenuStore";
import { useGetMypageData } from "../../hooks/useAPI";
import Loading from "../ui/Loading";
import MypageReview from "../review/MypageReview";
import EmptyData from "../ui/EmptyData";

const MySummary = ({ place }) => {
  const { setMenu } = useMenu();

  const { data, isLoading, isError } = useGetMypageData("/api/v1/mypage/reply");
  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;

  return (
    <Summary>
      <Myplace>
        <Info>
          <h2>최근 내가 등록한 장소</h2>
          {/* <span onClick={() => setMenu("내가 등록한 장소")}>더보기</span> */}
        </Info>
        <MyplaceCards grid={!place.data.length ? "auto" : ""}>
          {place.data.length ? place.data
            .filter((data, idx) => idx < 3)
            .map((place) => (
              <PlaceCard1 key={place.placeId} data={place} />
            )) : <EmptyData width={"100%"} text={"아직 등록한 장소가 없어요"}/>}
        </MyplaceCards>
      </Myplace>
      <MyReview>
        <Info>
          <h2>내가 작성한 후기</h2>

          {/* <span onClick={() => setMenu("내가 작성한 후기")}>더보기</span> */}
        </Info>
        <MyReviewCards >
          {data.data.length ? data.data
            .filter((data, idx) => idx < 3)
            .map((reply) => (
              <MypageReview key={reply.replyId} reply={reply} />
            )) : <EmptyData width={"100%"} text={"아직 등록한 후기가 없어요"}/>}
        </MyReviewCards>
      </MyReview>
    </Summary>
  );
};

const Summary = styled.div`
  padding-top: 144px;
  width: 100%;

  h2 {
    font-size: 18px;
    color: #333;
    font-weight: 500;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    color: #666;
    cursor: pointer;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding-top: 20px;
    margin-bottom: 48px;
    h2 {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

const Myplace = styled.div`
  margin-bottom: 48px;
`;

const MyplaceCards = styled.div`
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-columns: ${(props) => props.grid || "repeat(3, 1fr)"}; 
`;

const MyReview = styled.div``;

const MyReviewCards = styled.div``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MySummary;
