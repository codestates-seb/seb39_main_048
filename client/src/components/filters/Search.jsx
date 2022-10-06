import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFilters from "../../store/FilterStore";
import useDetectClose from "../../hooks/useDetectClose";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { BREAK_POINT_TABLET } from "../../constant";

const Search = ({ data }) => {
  const [filter, setFilter] = useState([]);
  const { searchData, setSearchData, text, setText, setSearchWord } =
    useFilters();
  const [isOpen, searchRef, setIsOpen] = useDetectClose(false);

  useEffect(() => {
    return () => {
      setSearchWord("");
    };
  }, [text]);

  useEffect(() => {
    return () => {
      setText("");
    };
  }, []);

  useEffect(() => {
    if (data) {
      setSearchData(data.data.map((data) => data.name));
    }
  }, [data]);

  const hadleChange = (e) => {
    if (data) {
      let targetData = e.target.value;
      setText(targetData);

      let filterData = searchData.filter((data) =>
        data.toLowerCase().includes(targetData.toLowerCase())
      );
      setFilter(filterData);

      if (filterData.length) {
        setIsOpen(!isOpen);
      }
    }
  };

  const handleAutoClick = (e) => {
    setText(e.target.textContent);
  };

  const handleSearch = () => {
    console.log("here");
    setSearchWord(text);
  };

  const onSearch = (e) => {
    if (e.key) {
      setSearchWord(text);
    }
  };

  return (
    <SearchGroup>
      <input
        placeholder="장소 이름이나 상호명을 검색해주세요."
        onChange={hadleChange}
        value={text}
        ref={searchRef}
        onKeyPress={onSearch}
      />
      <SearchIcon onClick={handleSearch} />
      {isOpen && filter.length ? (
        <SearchDatas>
          {filter.map((data, idx) => (
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
    transition: all 0.2s;
    &:hover {
      color: #4da772;
    }

    &:first-child {
      padding-top: 25px;
    }
    &:last-child {
      padding-bottom: 25px;
    }
  }
`;

export default Search;
