import React from "react";
import styled from "styled-components";
import useFilters from "../../store/FilterStore";
import useDetectClose from "../../hooks/useDetectClose";
import { useGetPlace } from "../../hooks/useAPI";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { BREAK_POINT_TABLET } from "../../constant";
import { useEffect } from "react";

const Search = () => {
  const [isOpen, searchRef, handleOpen] = useDetectClose(false);
  const { data, isLoading, isError } = useGetPlace("/place");
  const { searchData, setSearchData, text, setText } = useFilters();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  useEffect(() => {
    if (data) {
      setSearchData(data.map((data) => data.placeName)); // 장소명만 골라서 배열구성
    }
  }, [data]);

  // searchData === 검색되는 전체 데이터 (장소이름)
  // filterData === 검색어가 포함되어 있는 searchData -> 잘 안됨
  const hadleChange = (e) => {
    if (data) {
      console.log(searchData);
      let targetData = e.target.value;
      setText(targetData);

      let filterData = searchData.filter((data) =>
        data.toLowerCase().includes(targetData.toLowerCase())
      );
      console.log(filterData); // -> 여기까지 검색된 내용 잘 나옴
      // setSearchData(filterData) -> 여기서 넣으면 빈 배열이 나옴 -> 데이터 들어가는 속도가 늦어서?
    }
  };

  const handleAutoClick = (e) => {
    setText(e.target.textContent);
  };
  return (
    <SearchGroup>
      <input
        placeholder="장소 이름이나 상호명을 검색해주세요."
        onChange={hadleChange}
        value={text}
        onClick={handleOpen}
        ref={searchRef}
      />
      <SearchIcon />
      {isOpen && searchData.length ? (
        <SearchDatas>
          {searchData.map((data, idx) => (
            <li key={idx} onClick={handleAutoClick}>
              {data}
            </li>
          ))}
        </SearchDatas>
      ) : (
        ""
      )}
    </SearchGroup>
  );
};

const SearchGroup = styled.div`
  position: relative;
  width: 312px;
  padding: 17px 30px;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  input {
    border: none;
    height: 50%;
    width: 100%;
    font-size: 12px;
    height: 100%;
    &:focus {
      border: none;
      outline: none;
    }
  }
  svg {
    cursor: pointer;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 250px;
    padding: 12px 15px;
    gap: 10px;
  }
`;

const SearchDatas = styled.ul`
  position: absolute;
  text-align: start;
  z-index: 100;
  top: 55px;
  left: 0;
  width: 312px;
  max-height: 200px;
  background-color: #fff;
  overflow-y: auto;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  font-size: 14px;
  li {
    cursor: pointer;
    padding: 10px 25px;
    &:first-child {
      padding-top: 25px;
    }
    &:last-child {
      padding-bottom: 25px;
    }
  }
`;

export default Search;
