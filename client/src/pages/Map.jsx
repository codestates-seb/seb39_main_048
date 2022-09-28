/*global kakao*/
import React, { useEffect, useState } from "react";
import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";
import styled from "styled-components";

const MapBackground = () => {
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.56683321212213,
        lng: 126.97864942648738,
      }}
      style={{
        // 지도의 크기
        width: "100vw",
        height: "100vh",
      }}
      level={2} // 지도의 확대 레벨
    />
  );
};

export default MapBackground;
