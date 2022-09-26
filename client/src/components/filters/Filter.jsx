import React, { useRef } from "react";
import styled from "styled-components";
import useDetectClose from "../../hooks/useDetectClose";
import { ReactComponent as FilterIcon } from "../../assets/FilterIcon.svg";
import useFilters from "../../store/FilterStore";
import { sizeFilters, isOnlyFilters, locationFilters } from "../../constant";
import { BREAK_POINT_TABLET } from "../../constant";

const Filter = () => {
  const [isOpen, ref, handleOpen] = useDetectClose(false);
  const { filterData, setFilterData } = useFilters();
  const filterRef = useRef([]);

  const handleClick = (e) => {
    const data = e.target.textContent;
    if (filterRef.current.includes(data)) {
      const removeData = filterRef.current.filter((item) => item !== data);
      filterRef.current = removeData;
      setFilterData(filterRef.current);
      return;
    }
    console.log(data);
    filterRef.current.push(data);
    setFilterData(filterRef.current);
  };
 
  return (
    <FilterContainer>
      <FilterGroup onClick={handleOpen} ref={ref}>
        <span>filter</span>
        <FilterIcon />
      </FilterGroup>
      {isOpen ? (
        <FilterSelect>
          <p>최대 4가지 항목을 선택하실 수 있습니다 :)</p>
          <SizeFilter>
            {sizeFilters
              .map((item, idx) => (
                <FilterItem key={idx} onClick={handleClick}>
                  {item}
                </FilterItem>
              ))}
          </SizeFilter>
          <FormFilter>
            {isOnlyFilters
              .map((item, idx) => (
                <FilterItem key={idx}>{item}</FilterItem>
              ))}
          </FormFilter>
          <LocaFilter>
            {locationFilters
              .map((item, idx) => (
                <FilterItem key={idx}>{item}</FilterItem>
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
  padding: 18px 32px;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  color: #333;
  font-size: 14px;
  transition: all 0.3s;
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
  border-radius: 20px;
  width: 312px;
  max-height: 200px;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  flex-wrap: wrap;
  p {
    color: #2561e3;
    font-size: 14px;
  }
`;

const FilterItem = styled.div`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 50px;
  background-color: #eee;
  cursor: pointer;
`;

const SizeFilter = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`;

const FormFilter = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`;

const LocaFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  gap: 6px;
`;

export default Filter;
