import React from "react";
import styled from "styled-components";
import PlaceCard1 from "../cards/PlaceCard1";
import { BREAK_POINT_TABLET } from "../../constant";
import EmptyData from "../ui/EmptyData";
const MyPlace = ({data}) => {


  return (
    <Place>
      <Title>내가 등록한 장소</Title>
      <PlaceCards grid={data.data.length < 3 ? "repeat(3, 1fr)" : ""}>
        {data.data.length ? data.data.map((data, idx) => (
          <PlaceCard1 data={data} key={idx} />
        )) : <EmptyData width={"100%"} text={"아직 등록한 장소가 없어요"}/>}
      </PlaceCards>
    </Place>
  );
};

const Place = styled.div`
  padding-top: 144px;
  width: 100%;
  margin-bottom: 48px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding-top: 20px;
    margin-bottom: 48px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin-bottom: 16px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const PlaceCards = styled.div`
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-columns: ${(props) => props.grid || "repeat(auto-fit, minmax(250px, 1fr))"}
`;

export default MyPlace;
