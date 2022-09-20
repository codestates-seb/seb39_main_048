import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard_Type2 from "./PlaceCard_Type2";
import { ReactComponent as UpButton } from "../../assets/UpButton.svg";
import { ReactComponent as DownButton } from "../../assets/DownButton.svg";

const TOTAL_SLIDES = 2; // 화면 너머로 보이는 슬라이드 수

const CardGroup_Type2 = ({ title }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardRef = useRef(null);

  const handleNext = () => {
    if (currentCard >= TOTAL_SLIDES) return;
    else {
      console.log("next");
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrev = () => {
    if (currentCard === 0) return;
    else {
      console.log("prev");
      setCurrentCard(currentCard - 1);
    }
  };

  useEffect(() => {
    cardRef.current.style.transition = "all 0.5s ease-in-out";
    cardRef.current.style.transform = `translateY(calc(-${currentCard} * 413px))`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentCard]);

  return (
    <Group>
      <h2>{title}</h2>
      <Container>
        <Cards ref={cardRef}>
          <PlaceCard_Type2 />
          <PlaceCard_Type2 />
          <PlaceCard_Type2 />
          <PlaceCard_Type2 />
          <PlaceCard_Type2 />
          <PlaceCard_Type2 />
        </Cards>
      </Container>
      <Buttons>
        <Button onClick={handlePrev}>
          <UpButton />
        </Button>
        <Button onClick={handleNext}>
          <DownButton />
        </Button>
      </Buttons>
    </Group>
  );
};

const Group = styled.div`
  position: relative;
  width: 40vw;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 64px;
  color: #333;
  h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const Container = styled.div`
  width: 40vw;
  height: 389px;
  overflow-y: hidden;
`;

const Cards = styled.div`
  height: 200vh;
`;

const Buttons = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  top: 34px;
  left: 40%;
  height: 95%;
  margin: 0 auto;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.17);
`;

export default CardGroup_Type2;
