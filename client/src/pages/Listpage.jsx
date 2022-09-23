import React from "react";
import styled from "styled-components";
import PlaceCard1 from "../components/cards/PlaceCard1";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { useGetPlace } from "../hooks/useAPI";

const Listpage = () => {
  const { data, isLoading, isError } = useGetPlace();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;
  
  return (
    <>
      <ListPage>
        <Inner>
          <Title>우리 반려견과 함께할 장소는?</Title>
          <Category />
          <CardGroup>
            {data.map((place) => (
              <PlaceCard1 data={place} key={place.placeId}/>
            ))}
          </CardGroup>
        </Inner>
        <Footer />
      </ListPage>
    </>
  );
};
const ListPage = styled.div`
  padding-top: 152px;
`;

const Inner = styled.div`
  padding: 0 10%;

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
  margin-top: 64px;
  gap: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default Listpage;
