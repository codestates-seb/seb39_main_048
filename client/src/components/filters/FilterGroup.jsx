import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Category from "./Category";
import Search from "./Search";
import useFilters from "../../store/FilterStore";
import { BREAK_POINT_TABLET } from "../../constant";

const FilterGroup = () => {
  const { filterData, setFilterData } = useFilters();
  console.log(filterData);

  return (
    <>
      <Group>
        <Category />
        <Filter />
        <Search />
      </Group>
      <FilterItems>
        {filterData.map((item, idx) => (
          <FilterItem key={idx}>{item}</FilterItem>
        ))}
      </FilterItems>
    </>
  );
};

const Group = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  /* justify-content: center; */
  flex-wrap: wrap;
  transition: all 0.3s;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    gap: 16px;
  }
`;

const FilterItems = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterItem = styled.div`
  margin: 16px 0;
  color: #4da772;
  border: 1px solid #4da772;
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 50px;
`;

export default FilterGroup;
