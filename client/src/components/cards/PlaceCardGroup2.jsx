import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard2 from "./PlaceCard2";
import { ReactComponent as UpButton } from "../../assets/UpButton.svg";
import { ReactComponent as DownButton } from "../../assets/DownButton.svg";


const PlaceCardGroup2 = ({ title, data }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const TOTAL_SLIDES = (data.length - 2) /2; // 화면 너머로 보이는 슬라이드 수
  const cardRef = useRef(null);

  const handleNext = () => {
    if (currentCard >= TOTAL_SLIDES) return;
    else {
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrev = () => {
    if (currentCard === 0) return;
    else {
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
          {data.map((data, idx)=> (
            <PlaceCard2 data={data} key={idx}/>
          ))}
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
  margin: 0 auto;
  margin-top: 64px;
  color: #333;
  h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const Container = styled.div`
  height: 389px;
  overflow-y: hidden;
`;

const Cards = styled.div`
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

export default PlaceCardGroup2;
