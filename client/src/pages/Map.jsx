/* global kakao */
import styled from "styled-components";

const Map = () => {
  return (
    <MapPage
      center={{ lat: 36.2683, lng: 127.6358 }}
      style={{ width: "100%", height: "360px" }}
      level={14}
    >
      <MarkerClusterer averageCenter={true} minLevel={10}>
        {clusterPositionsData.positions.map((pos) => (
          <MapMarker key={`${pos.lat}-${pos.lng}`} position={pos} />
        ))}
      </MarkerClusterer>
    </MapPage>
  );
};

const MapPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MarkerClusterer = styled.div``;

export default Map;
