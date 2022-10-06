import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetPlace } from "../hooks/useAPI";
import Point from "../assets/Point.png";
import PlaceCard1 from "../components/cards/PlaceCard1";
import FilterGroup from "../components/filters/FilterGroup";
import Footer from "../components/Footer";
import useFilters from "../store/FilterStore";
import EmptyData from "../components/ui/EmptyData";
import MoveRegist from "../components/buttons/MoveRegist";
import Loading from "../components/ui/Loading";
import { BREAK_POINT_TABLET } from "../constant";
import { BREAK_POINT_PHONE } from "../constant";

const Listpage = () => {
  const {
    selectCategory,
    searchWord,
    setSelectCategory,
    setFilterData,
    filterData,
  } = useFilters();
  const [realData, setRealData] = useState([]);

  useEffect(() => {
    return () => {
      setSelectCategory("전체");
      setFilterData([]);
    };
  }, []);

  useEffect(() => {
    if (data) {
      if (filterData.length) {
        const group = data.data.map((data) => data.tagNameList);

        const arr = [];
        for (let i = 0; i < group.length; i++) {
          const tagArr = group[i].map((data) => data.tagName);
          if (
            filterData.length ===
            tagArr.filter((data) => filterData.includes(data)).length
          ) {
            arr.push(data.data[i]);
          }
        }
        setRealData(arr);
      }
    }
  }, [filterData]);

  let URL = "";
  if (selectCategory === "전체") URL = "/api/v1/place/category/all";
  if (selectCategory === "식당") URL = "/api/v1/place/category/restaurant";
  if (selectCategory === "카페") URL = "/api/v1/place/category/cafe";
  if (selectCategory === "숙소") URL = "/api/v1/place/category/stay";
  if (selectCategory === "병원") URL = "/api/v1/place/category/hospital";
  if (selectCategory === "기타") URL = "/api/v1/place/category/etc";

  const { data, isLoading, isError } = useGetPlace(URL);

  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;

  console.log("data", data)
  return (
    <>
      <ListPage>
        <Inner>
          <Title>
            우리 반려견과 함께할 장소는?
            <img src={Point}></img>
          </Title>

          <FilterGroup data={data} />
          <CardGroup grid={data.data.length < 4 ? "repeat(4, 1fr)" : ""}>
            {!searchWord && !filterData.length
              ? data.data.map((place, idx) => (
                  <PlaceCard1 data={place} key={idx} />
                ))
              : ""}
            {filterData.length && searchWord ? (
              realData
                .filter((place) => searchWord === place.name)
                .map((place, idx) => <PlaceCard1 data={place} key={idx} />)
            ) : filterData.length && searchWord && !realData ? (
              <EmptyData />
            ) : (
              ""
            )}

            {filterData.length && !searchWord && realData.length ? (
              realData.map((data, idx) => <PlaceCard1 data={data} key={idx} />)
            ) : !realData.length && filterData.length ? (
              <EmptyData />
            ) : (
              ""
            )}
            {searchWord && !filterData.length
              ? data.data
                  .filter((place) => searchWord === place.name)
                  .map((place, idx) => <PlaceCard1 data={place} key={idx} />)
              : ""}
            {searchWord &&
            !data.data.filter((place) => searchWord === place.name).length ? (
              <EmptyData />
            ) : (
              ""
            )}
            {/* {!data.length ? <EmptyData /> : ""} */}
          </CardGroup>
        </Inner>
        <MoveRegist />
        <Footer />
      </ListPage>
    </>
  );
};

const ListPage = styled.div`
  padding-top: 166px;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding-top: 110px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  width: 80vw;
  margin: 0 auto;
  div:nth-child(2) {
    justify-content: start;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 85vw;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  transition: all 0.3s;

  img {
    position: absolute;
    top: -12px;
    left: 130px;
    width: 75px;
    z-index: -10;
    transition: all 0.3s;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 20px;
    img {
      top: -12px;
      left: 110px;
      width: 65px;
      z-index: -10;
    }
  }
`;

const CardGroup = styled.div`
  margin-top: 40px;
  gap: 32px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid || "repeat(auto-fit, minmax(240px, 1fr))"};

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export default Listpage;
