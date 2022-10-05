/*global kakao*/
import React, { useEffect, useState } from "react";
import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";
import MapBackground from "../components/map/MapBackground";
import styled from "styled-components";
import FilterGroup from "../components/filters/FilterGroup";
import MapListCard from "../components/cards/MapListCard";
import useFilters from "../store/FilterStore";
import { useGetPlace } from "../hooks/useAPI";

const MapPage = () => {
  const { selectCategory, filterData } = useFilters();
  let URL = "";

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
    <MapScreen>
      <div className="mapBackground">
        <MapBackground />
        <div className="searchBar">
          <FilterGroup />
        </div>
        <div className="CardList">
          {data.map((place, idx) => (
            <MapListCard data={place} key={idx} />
          ))}
        </div>
      </div>
    </MapScreen>
  );
};

const MapScreen = styled.div`
  .mapBackground {
    position: relative;
    width: 100%;
    overflow: hidden;

    .searchBar {
      position: absolute;
      background-color: #ffffff;
      border-radius: 30px;
      background-blend-mode: screen;
      opacity: 0.85;
      top: 10%;
      left: 17%;
      z-index: 5;
    }
    .CardList {
      z-index: 3;
      position: absolute;
      bottom: 10%;
      left: 1%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20%, 1));
    }
  }
`;

export default MapPage;
