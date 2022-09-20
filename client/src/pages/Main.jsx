import React from "react";
import styled from "styled-components";
import CardGroup_Type1 from "../components/cards/CardGroup_Type1";
import CardGroup_Type2 from "../components/cards/CardGroup_Type2";
import Category from "../components/Category";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <MainPage>
      <div className="center">
        <Category />
      </div>
      <CardGroup_Type1 title={"이런 식당은 어때요? 🍽"} />
      <CardGroup_Type1 title={"이런 카페는 어때요? ☕️"} />
      <CardGroup_Type1 title={"이런 숙소는 어때요? 🏡 "} />
      <Type2>
        <CardGroup_Type2 title={"병원 고민중이신가요? 🏥 "} />
        <CardGroup_Type2 title={"다양한 장소 추천드려요 🏕 "} />
      </Type2>
      <Footer />
    </MainPage>
  );
};

const MainPage = styled.div`
  padding-top: 152px;
  color: #333;
  cursor: default;
  .center {
    text-align: center;
  }
`;

const Type2 = styled.div`
  display: flex;
  align-items: center;
  /* width: 80vw; */
  padding: 0 10%;
  margin: 0 auto;
  gap: 24px;
`;

export default Main;
