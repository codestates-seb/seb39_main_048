import React from "react";
import styled from "styled-components";
import useFilters from "../../store/FilterStore";
import toast, { Toaster } from "react-hot-toast";
import { ToastInfo } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";

const FilterItem = ({ item }) => {
  const { filterData, setFilterData } = useFilters();

  const handleClick = (e) => {
    const data = e.target.textContent;

    // 이미 필터선택된 데이터라면 제거해줌
    if (filterData.includes(data)) {
      const removeData = filterData.filter((item) => item !== data);
      setFilterData(removeData);
      return;
    }

    if (filterData.includes("전체") && data === "소형견") {
      const removeData = filterData.filter((item) => item !== "전체");
      setFilterData([...removeData, data]);
    }

    // 최대 선택 가능한 필터 제한 (토스트)
    if (filterData.length > 3) {
      toast("최대 4개까지 선택 가능합니다!", { icon: "🥲", ...ToastInfo });

      return;
    }

    setFilterData([...filterData, data]);
  };

  return (
    <>
      <Filter
        onClick={handleClick}
        color={filterData.includes(item) ? "#4da772" : ""}
        bgcolor={filterData.includes(item) ? "#white" : ""}
      >
        {item}
      </Filter>
      <Toaster />
    </>
  );
};

const Filter = styled.div`
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 50px;
  transition: all 0.1s ease-in-out;
  background-color: ${(props) => props.bgcolor || "#f2f4f7"};
  border: 1px solid ${(props) => props.color || "#f2f4f7"};
  color: ${(props) => props.color || "#333"};
  cursor: pointer;
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export default FilterItem;
