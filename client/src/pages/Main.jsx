import React, { useEffect } from "react";
import styled from "styled-components";
import MainReviewCard from "../components/cards/MainReviewCard";
import PlaceCardGroup1 from "../components/cards/PlaceCardGroup1";
import Footer from "../components/Footer";
import MainTitle from "../components/MainTitle";
import Loading from "../components/ui/Loading";
import { useGetRecommend } from "../hooks/useAPI";
import useFilters from "../store/FilterStore";

const Main = () => {
  const { selectCategory, setSelectCategory } = useFilters();

  useEffect(() => {
    return () => {
      setSelectCategory("식당");
    };
  }, []);
 
  const { data, isLoading, isError } = useGetRecommend("/api/v1/place/main");
  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;

  let DATA = data.restaurant;
  if (selectCategory === "식당") DATA = data.restaurant;
  if (selectCategory === "카페") DATA = data.cafe;
  if (selectCategory === "숙소") DATA = data.stay;
  if (selectCategory === "병원") DATA = data.hospital;
  if (selectCategory === "기타") DATA = data.etc;


  return (
    <>
     <MainTitle/>
      <MainPage>
        <PlaceCardGroup1 title={"추천장소 확인해봐요! 👀"} data={DATA} />
      </MainPage>
      <MainReviewCard />
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
  margin-bottom: 128px;
  cursor: default;
  .center {
    text-align: center;
  }
`;


export default Main;
