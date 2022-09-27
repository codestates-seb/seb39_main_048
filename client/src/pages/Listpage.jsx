import React from "react";
import { useGetPlace } from "../hooks/useAPI";
import styled from "styled-components";
import PlaceCard1 from "../components/cards/PlaceCard1";
import FilterGroup from "../components/filters/FilterGroup";
import Footer from "../components/Footer";
import useFilters from "../store/FilterStore";

const Listpage = () => {
  const { selectCategory } = useFilters();
  let URL = "";

  // 스토어에 저장해바라~
  if (selectCategory === "전체") URL = "/place";
  if (selectCategory === "식당") URL = "/restaurant";
  if (selectCategory === "카페") URL = "/cafe";
  if (selectCategory === "숙소") URL = "/stay";
  if (selectCategory === "병원") URL = "/place";
  if (selectCategory === "기타") URL = "/place";

  const { data, isLoading, isError } = useGetPlace(URL);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;


  return (
    <>
      <ListPage>
        <Inner>
          <Title>우리 반려견과 함께할 장소는?</Title>
          <FilterGroup />
          <CardGroup>
              {data.map((place, idx) => (
                <PlaceCard1
                  data={place}
                  key={idx}
                />
              ))}
          </CardGroup>
        </Inner>
        <Footer />
      </ListPage>
    </>
  );
};
const ListPage = styled.div`
  padding-top: 144px;
`;

const Inner = styled.div`
  max-width: 1280px;
  width: 80vw;
  margin: 0 auto;

  div:nth-child(2) {
    justify-content: start;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 24px;
`;

const CardGroup = styled.div`
  margin-top: 40px;
  gap: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export default Listpage;
