import { Link, useParams } from "react-router-dom";

import { Map, MapMarker, StaticMap } from "react-kakao-maps-sdk";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGetDetailPlace } from "../../hooks/useAPI";

const MapBackground = ({ searchPlace }) => {
  const { id } = useParams();
  const { data } = useGetDetailPlace(id);

  const [location, setLocation] = useState({
    center: { lat: 37.56683321212213, lng: 126.97864942648738 },
    isPanto: true,
  });
  const [searchAddress, SetSearchAddress] = useState();
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [info, setInfo] = useState();
  const [findRoad, setFindRoad] = useState(
    "37.56683321212213,126.97864942648738"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, PlacesSearch);

    function PlacesSearch(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].placeName,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);

        displayPagination(pagination);
        setPlaces(data);
      }
    }
  }, [map]);

  return (
    <BackGroundMap>
      <Map // 지도를 표시할 Container
        center={
          // 지도의 중심좌표
          location.center
        }
        isPanto={location.isPanto}
        style={{
          // 지도의 크기
          width: "100vw",
          height: "100vh",
        }}
        level={3} // 지도의 확대 레벨
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker // 마커를 생성
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={
              // 마커가 표시될 위치
              marker.position
            }
            clickable={true}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen && (
              <div className="placeInfo">
                {marker.content} <br />
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
        ))}
      </Map>
    </BackGroundMap>
  );
};

const BackGroundMap = styled.div`
  input {
    z-index: 5;
  }
  button {
    z-index: 5;
  }
`;

export default MapBackground;
