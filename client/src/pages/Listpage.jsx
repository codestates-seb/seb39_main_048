import React from "react";
import styled from "styled-components";
import PlaceCard_Type1 from "../components/cards/PlaceCard_Type1";
import Category from "../components/Category";
import Footer from "../components/Footer";

const Listpage = () => {
  return (
    <>
      <ListPage>
        <Inner>
          <Title>우리 반려견과 함께할 장소는?</Title>
          <Category />
          <CardGroup>
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
            <PlaceCard_Type1 />
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
