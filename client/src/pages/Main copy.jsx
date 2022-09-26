import React from "react";
import styled from "styled-components";
import PlaceCardGroup1 from "../components/cards/PlaceCardGroup1";
import PlaceCardGroup2 from "../components/cards/PlaceCardGroup2";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { useGetRecommend } from "../hooks/useAPI";

const Main = () => {
  const { data, isLoading, isError } = useGetRecommend();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  console.log(data);

  return (
    <>
      <MainPage>
        <div className="center">
          <Category />
        </div>
        <PlaceCardGroup1 title={"이런 식당은 어때요? 🍽"} data={data} />
        <PlaceCardGroup1 title={"이런 카페는 어때요? ☕️"} data={data} />
        <PlaceCardGroup1 title={"이런 숙소는 어때요? 🏡 "} data={data} />
        <Type2>
          <PlaceCardGroup2 title={"병원 고민중이신가요? 🏥 "} data={data} />
          <PlaceCardGroup2 title={"다양한 장소 추천드려요 🏕 "} data={data} />
        </Type2>
      </MainPage>
      <Footer />
    </>
  );
};

const MainPage = styled.div`
  padding-top: 152px;
  max-width: 1280px;
  width: 80vw;
  margin: 0 auto;
  color: #333;
  cursor: default;
  .center {
    text-align: center;
  }
`;

const Type2 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export default Main;
