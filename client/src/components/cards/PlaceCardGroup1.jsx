import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PlaceCard1 from "./PlaceCard1";
import { ReactComponent as RightButton } from "../../assets/RightButton.svg";
import { ReactComponent as LeftButton } from "../../assets/LeftButton.svg";
import { BREAK_POINT_TABLET } from "../../constant";
import { SelectCategory } from "../../constant";
import useFilters from "../../store/FilterStore";

const PlaceCardGroup1 = ({ title, data }) => {
  const { setSelectCategory, selectCategory } = useFilters();
  const TOTAL_SLIDES = data.length - 4; // 화면 너머로 보이는 슬라이드 수
  const [currentCard, setCurrentCard] = useState(0);
  const cardRef = useRef(null);

  const handleClick = (e) => {
    setSelectCategory(e.target.textContent);
  };

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
    cardRef.current.style.transform = `translateX(calc(-${currentCard} * 294px))`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentCard]);

  useEffect(() => {
    setCurrentCard(0);
  }, [selectCategory]);

  return (
    <Group>
      <h2>{title}</h2>
      <CategoryGroup>
        {SelectCategory.map((item, idx) => (
          <Item
            key={idx}
            onClick={handleClick}
            className={selectCategory === item ? "active" : ""}
          >
            {item}
          </Item>
        ))}
      </CategoryGroup>
      <Container>
        <Cards ref={cardRef}>
          {data.map((data, idx) => (
            <PlaceCard1 data={data} key={idx} width={"264px"} />
          ))}
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
  margin: 0 auto;
  margin-top: 64px;
  color: #333;
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const CategoryGroup = styled.ul`
  display: flex;
  align-items: center;
  gap: 7px;
  border-radius: 50px;
  transition: all 0.3s;
  margin-bottom: 24px;

  .active {
    color: #fff;
    background-color: #4da772;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    gap: 0px;
    flex-wrap: wrap;
    border-radius: 50px;
  }
`;

const Item = styled.li`
  font-size: 16px;
  padding: 0.5rem 0.9rem;
  border-radius: 50px;
  color: ${(props) => props.color || "#333"};
  background-color: ${(props) => props.bgcolor || "#fff"};
  text-align: center;
  transition: all 0.3s;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding: 5px 10px;
    font-size: 14px;
  }
`;

const Container = styled.div`
  width: 80vw;
  max-width: 1280px;
  overflow-x: hidden;
`;

const Cards = styled.div`
  display: flex;
  width: 2144px;
  gap: 32px;
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
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

export default PlaceCardGroup1;
