import { useState } from "react";
import styled from "styled-components";
import usePost from "../../store/PostStore";
import { SelectCategory } from "../../constant";
import { useEffect } from "react";

const Category = ({ data }) => {
  const [currentActive, setCurrentActive] = useState("");
  const { setCategory } = usePost();

  useEffect(() => {
    if (data) {
      setCurrentActive(data);
    }
  }, []);

  const BtnActive = (e) => {
    setCurrentActive(e.target.innerHTML);
    setCategory(e.target.innerHTML);
  };

  return (
    <CategoryBtn>
      <ul>
        {SelectCategory.map((category, idx) => (
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
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export default Category;
