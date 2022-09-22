import { useState } from "react";
import styled from "styled-components";

const Category = () => {
  const Categorys = ["식당", "숙소", "카페", "병원", "기타"];
  const [currentActive, setCurrentActive] = useState("");

  const BtnActive = (e) => {
    setCurrentActive(e.target.innerHTML);
  };

  return (
    <CategoryBtn>
      <ul>
        {Categorys.map((category, idx) => (
          <li
            key={idx}
            onClick={BtnActive}
            className={currentActive === category ? "Active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </CategoryBtn>
  );
};

const CategoryBtn = styled.div`
  font-size: 14px;
  font-weight: 350;

  ul {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

    .Active {
      background-color: #4da772;
      color: #ffffff;
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    color: #4da772;
    border: 1px solid;
    border-radius: 50px;
    border-color: #4da772;
    background-color: #ffffff;
    cursor: pointer;
  }
`;

export default Category;
