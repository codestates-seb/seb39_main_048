import React from "react";
import styled from "styled-components";
import useMenu from "../store/Store";
import useDetectClose from "../hooks/useDetectClose";
import { useGetSearch } from "../hooks/useAPI";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { ReactComponent as Search } from "../assets/Search.svg";

const BREAK_POINT_TABLET = 1024;
const BREAK_POINT_PHONE = 768;

const Category = () => {
  const category = ["전체", "식당", "카페", "숙소", "병원", "기타"];
  const [isOpen, searchRef, handleOpen] = useDetectClose(false);

  const { data, isLoading, isError } = useGetSearch();
  const { searchData, setSearchData, text, setText } = useMenu();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;


  const hadleChange = (e) => {
    let targetData = e.target.value;
    setText(targetData);
    let filterData = data.filter((data) =>
      data.toLowerCase().includes(targetData.toLowerCase())
    );

    if (targetData.length === 0) setSearchData("");
    setSearchData(filterData);
  };

  const handleAutoClick = (e) => {
    setText(e.target.textContent);
    console.log("item", e.target.textContent);
  };

  return (
    <Group>
      <CategoryGroup>
        {category.map((item, idx) => (
          <Item
            key={idx}
            bgcolor={item === "전체" ? "#4DA772" : ""}
            color={item === "전체" ? "#fff" : ""}
          >
            {item}
          </Item>
        ))}
      </CategoryGroup>
      <FilterGroup>
        <span>filter</span>
        <Filter />
      </FilterGroup>
      <SearchGroup>
        <input
          placeholder="장소 이름이나 상호명을 검색해주세요."
          onChange={hadleChange}
          value={text}
          onClick={handleOpen}
          ref={searchRef}
        />
        <Search />
        {isOpen ? ( <SearchDatas>
          {searchData &&
            searchData.map((data, idx) => (
              <li key={idx} onClick={handleAutoClick}>
                {data}
              </li>
            ))}
        </SearchDatas>) : ""}
       
      </SearchGroup>
    </Group>
  );
};

const Group = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryGroup = styled.ul`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0.5rem;
  border: 1px solid #d7e2eb;
  border-radius: 50px;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
  }
`;

const Item = styled.li`
  font-size: 14px;
  padding: 0.5rem 0.9rem;
  border-radius: 50px;
  color: ${(props) => props.color || "#333"};
  background-color: ${(props) => props.bgcolor || "#fff"};
  text-align: center;
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
`;

const SearchGroup = styled.div`
  position: relative;
  width: 312px;
  height: 100%;
  padding: 18px 30px;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    border: none;
    height: 50%;
    width: 100%;
    font-size: 12px;
    &:focus {
      border: none;
      outline: none;
    }
  }
  svg {
    cursor: pointer;
  }
`;

const SearchDatas = styled.ul`
  position: absolute;
  top: 55px;
  left: 0;
  border-radius: 20px;
  width: 312px;
  height: 200px;
  background-color: #fff;
  border: 1px solid #d7e2eb;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  padding: 10px 0;
  li {
    cursor: pointer;
    padding: 10px 25px;
  }
`;

export default Category;
