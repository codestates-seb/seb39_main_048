import { Link } from "react-router-dom";

import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MapBackground = (props) => {
  const { myLoca, level } = props;
  const [location, setLocation] = useState({
    lat: 37.56683321212213,
    lng: 126.97864942648738,
  });
  const [findRoad, setFindRoad] = useState(
    "37.56683321212213,126.97864942648738"
  );
  const [isOpen, setIsOpen] = useState(false);
  // const url = `https://map.kakao.com/link/to/Hello World!,${setFindRoad}`;
  // console.log(setFindRoad);

  return (
    <div className="backGroundMap">
      <Map // 지도를 표시할 Container
        center={
          // 지도의 중심좌표
          myLoca ? myLoca : location
        }
        style={{
          // 지도의 크기
          width: "100vw",
          height: "100vh",
        }}
        level={level} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성
          // key={idx}
          position={
            // 마커가 표시될 위치
            myLoca ? myLoca : location
          }
          clickable={true}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen && (
            <div className="placeInfo">
              상호명 <br />
              <Link
                to={`/place`}
                style={{ color: "blue" }}
                target="_blank" // 새창 오픈
                rel="noreferrer"
              >
                장소정보
              </Link>{" "}
              ||{" "}
              <a
                href={`https://map.kakao.com/link/to/서울시청,37.56683321212213,126.97864942648738`}
                style={{ color: "blue" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                길찾기
              </a>
            </div>
          )}
        </MapMarker>
      </Map>
    </div>
  );
};

export default MapBackground;
