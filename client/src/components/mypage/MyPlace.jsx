<<<<<<< HEAD
import React from 'react'

const MyPlace = () => {
  
  return (
    <div>MyPlace</div>
  )
}

export default MyPlace
=======
import React from "react";
import styled from "styled-components";
import PlaceCard1 from "../cards/PlaceCard1";
import { useGetMypageData } from "../../hooks/useAPI";
import { BREAK_POINT_TABLET } from "../../constant";
import Loading from "../ui/Loading";

const MyPlace = ({menu}) => {

  const { data, isLoading, isError } = useGetMypageData("/api/v1/mypage/place");

  if (isLoading) return <Loading/>
  if (isError) return <div>ERR...</div>;

  return (
    <Place>
      <Title> {menu}</Title>
      <PlaceCards grid={data.data.length < 3 ? "repeat(3, 1fr)" : ""}>
        {data.data.map((data, idx) => (
          <PlaceCard1 data={data} key={idx} />
        ))}
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default MyPlace;
>>>>>>> 5ef896edf001fbf98031bee0bafd2e9251779fde
