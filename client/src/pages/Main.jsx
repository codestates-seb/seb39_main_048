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

  let URL = "";
  if (selectCategory === "식당") URL = "/restaurant";
  if (selectCategory === "카페") URL = "/cafe";
  if (selectCategory === "숙소") URL = "/stay";
  if (selectCategory === "병원") URL = "/place";
  if (selectCategory === "기타") URL = "/place";

  const { data, isLoading, isError } = useGetRecommend(URL);
  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;

  return (
    <>
     <MainTitle/>
      <MainPage>
        <PlaceCardGroup1 title={"추천장소 확인해봐요! 👀"} data={data} />
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
