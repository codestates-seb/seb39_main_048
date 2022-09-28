import React from "react";
import styled from "styled-components";
import { category } from "../../constant";
import { BREAK_POINT_TABLET } from "../../constant";
import useFilters from "../../store/FilterStore";

const Category = () => {
  const { selectCategory, setSelectCategory } = useFilters();

  const handleClick = (e) => {
    setSelectCategory(e.target.textContent);
  };

  return (
    <CategoryGroup>
      {category.map((item, idx) => (
        <Item
          key={idx}
          onClick={handleClick}
          className={selectCategory === item ? "active" : ""}
        >
          {item}
        </Item>
      ))}
    </CategoryGroup>
  );
};

const CategoryGroup = styled.ul`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0.5rem;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  transition: all 0.3s;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    gap: 0px;
    flex-wrap: wrap;
    border-radius: 50px;
  }

  .active {
    background-color: #4da772;
    color: #fff;
  }
`;

const Item = styled.li`
  font-size: 14px;
  padding: 0.5rem 0.9rem;
  border-radius: 50px;
  color: "#333";
  background-color: "#fff";
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export default Category;
