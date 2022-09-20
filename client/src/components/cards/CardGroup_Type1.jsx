import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard_Type1 from "./PlaceCard_Type1";
import { ReactComponent as RightButton } from "../../assets/RightButton.svg";
import { ReactComponent as LeftButton } from "../../assets/LeftButton.svg";

const TOTAL_SLIDES = 3; // 화면 너머로 보이는 슬라이드 수

const CardGroup_Type1 = ({ title }) => {
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
    cardRef.current.style.transform = `translateX(calc(-${currentCard} * 294px))`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentCard]);

  return (
    <Group>
      <h2>{title}</h2>
      <Container>
        <Cards ref={cardRef}>
          <PlaceCard_Type1 />
          <PlaceCard_Type1 />
          <PlaceCard_Type1 />
          <PlaceCard_Type1 />
          <PlaceCard_Type1 />
          <PlaceCard_Type1 />
          <PlaceCard_Type1 />
        </Cards>
      </Container>
      <Buttons>
        <Button onClick={handlePrev}>
          <LeftButton />
        </Button>
        <Button onClick={handleNext}>
          <RightButton />
        </Button>
      </Buttons>
    </Group>
  );
};

const Group = styled.div`
  position: relative;
  padding: 0 10%;
  margin-top: 64px;
  color: #333;
  h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const Container = styled.div`
  width: 80vw;
  overflow-x: hidden;
`;

const Cards = styled.div`
  width: 160vw;
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  left: 9%;
  width: 82%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.17);
`;

export default CardGroup_Type1;
