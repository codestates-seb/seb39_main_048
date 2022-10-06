import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Category from "./Category";
import Search from "./Search";
import useFilters from "../../store/FilterStore";
import { BREAK_POINT_TABLET } from "../../constant";

const FilterGroup = ({data}) => {
  const { filterData, setFilterData } = useFilters();

  const handleRemove = (e) => {
    const idx = e.target.id;
    const removeFilter = filterData.filter((data) => data !== filterData[idx]);
    setFilterData(removeFilter);
  };

  return (
    <>
      <Group>
        <div className="filters">
          <Category />
          <Filter />
          <Search data={data}/>
        </div>
      </Group>
      <FilterItems>
        {filterData.map((item, idx) => (
          <FilterItem key={idx}>
            {item}
            <span onClick={handleRemove} id={idx}>
              ✕
            </span>
          </FilterItem>
        ))}
      </FilterItems>
    </>
  );
};

const Group = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    gap: 16px;
  }

  .filters {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    width: 100%;
    transition: all 0.3s;
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
      gap: 16px;
    }
  }
`;

const FilterItems = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterItem = styled.div`
  margin: 16px 0 0 0;
  color: #4da772;
  border: 1px solid #4da772;
  background-color: #fff;
  padding: 10px 14px;
  border-radius: 50px;
  font-size: 14px;
  span {
    margin-left: 8px;
    font-size: 12px;
    cursor: pointer;
  }
`;

export default FilterGroup;
