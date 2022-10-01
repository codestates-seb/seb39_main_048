/*global kakao*/
import React, { useEffect, useState } from "react";
import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";
import Category from "../components/filters/Category";
import Filter from "../components/filters/Filter";
import Search from "../components/filters/Search";
import MapBackground from "../components/map/MapBackground";
import styled from "styled-components";
import { BREAK_POINT_TABLET } from "../constant";
import FilterGroup from "../components/filters/FilterGroup";
import MapListCard from "../components/cards/MapListCard";

const MapPage = () => {
  return (
    <MapScreen>
      <div className="mapBackground">
        <MapBackground />
        <div className="searchBar">
          <FilterGroup />
        </div>
        {/* <MapListCard /> */}
      </div>
    </MapScreen>
  );
};

const MapScreen = styled.div`
  .mapBackground {
    position: relative;
    width: 100%;

    .searchBar {
      position: absolute;
      background-color: #ffffff;
      border-radius: 30px;
      background-blend-mode: screen;
      opacity: 0.8;
      top: 10%;
      left: 11.5%;
      z-index: 5;
    }
  }
`;

export default MapPage;
