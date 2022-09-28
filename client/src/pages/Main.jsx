import React from "react";
import styled from "styled-components";
import PlaceCardGroup1 from "../components/cards/PlaceCardGroup1";
import PlaceCardGroup2 from "../components/cards/PlaceCardGroup2";
import Category from "../components/filters/Category";
import FilterGroup from "../components/filters/FilterGroup";
import Footer from "../components/Footer";
import { useGetRecommend } from "../hooks/useAPI";

const Main = () => {
  const { data, isLoading, isError } = useGetRecommend();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  return (
    <>
      <MainTitle></MainTitle>
      <MainPage>
        <PlaceCardGroup1 title={"추천장소 확인해봐요! 👀"} data={data} />
      </MainPage>
      <Footer />
    </>
  );
};

const MainPage = styled.div`
  padding-top: 50px;
  max-width: 1280px;
  width: 80vw;
  margin: 0 auto;
  color: #333;
  cursor: default;
  .center {
    text-align: center;
  }
`;

const MainTitle = styled.div`
  padding-top: 152px;
  font-size: 80px;
  height: 55vh;
  font-weight: 900;
  background-color: #eee;
  text-align: center;
`;

export default Main;
