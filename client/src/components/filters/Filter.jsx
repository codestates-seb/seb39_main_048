import React from "react";
import styled from "styled-components";
import { ReactComponent as FilterIcon } from "../../assets/FilterIcon.svg";
import { sizeFilters, isOnlyFilters, locationFilters } from "../../constant";
import { BREAK_POINT_TABLET } from "../../constant";
import { BREAK_POINT_TABLET_MINI } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";
import useDetectClose from "../../hooks/useDetectClose";
import FilterItem from "./FilterItem";

const Filter = () => {
  const [isOpen, ref, handleOpen] = useDetectClose(false);
  return (
    <FilterContainer ref={ref}>
      <FilterGroup onClick={handleOpen} bgcolor={isOpen ? "#f7fafe" : ""}>
        <span>filter</span>
        <FilterIcon />
      </FilterGroup>
      {isOpen ? (
        <FilterSelect>
          <p>최대 4가지 항목을 선택하실 수 있습니다 :)</p>
          <SizeFilter>
            {sizeFilters.map((item, idx) => (
              <FilterItem item={item} key={idx} />
            ))}
          </SizeFilter>
          <FormFilter>
            {isOnlyFilters.map((item, idx) => (
              <FilterItem item={item} key={idx} />
            ))}
          </FormFilter>
          <LocaFilter>
            {locationFilters.map((item, idx) => (
              <FilterItem item={item} key={idx} />
            ))}
          </LocaFilter>
        </FilterSelect>
      ) : (
        ""
      )}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  position: relative;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 17px 32px;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  color: #333;
  font-size: 14px;
  transition: all 0.3s;
  background-color: ${(props) => props.bgcolor || "#fff"};
  cursor: pointer;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding: 12px 15px;
    font-size: 12px;
    gap: 8px;
  }
`;

const FilterSelect = styled.div`
  position: absolute;
  text-align: start;
  padding: 20px;
  z-index: 100;
  top: 55px;
  left: 0;
  width: 550px;
  max-height: 260px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  overflow-y: auto;
  flex-wrap: wrap;
  p {
    color: #666;
    font-size: 12px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    left: -200px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    left: -300px;
    width: 400px;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    left: 0;
    width: 300px;
    padding: 16px;
  }
`;

const SizeFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
`;

const FormFilter = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

const LocaFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  gap: 10px;
`;

export default Filter;
