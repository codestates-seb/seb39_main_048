import { useState } from "react";
import styled from "styled-components";
import usePost from "../../store/PostStore";
import { SelectCategory } from "../../constant";
import { useEffect } from "react";
import { BREAK_POINT_PHONE } from "../../constant";

const Category = ({ data }) => {
  const [currentActive, setCurrentActive] = useState("");
  const { setCategory } = usePost();

  useEffect(() => {
    if (data) {
      switch (data) {
        case "restaurant":
          setCurrentActive("식당");
          break;
        case "cafe":
          setCurrentActive("카페");
          break;
        case "stay":
          setCurrentActive("숙소");
          break;
        case "hospital":
          setCurrentActive("병원");
          break;
        case "etc":
          setCurrentActive("기타");
          break;
      }
    }
  }, []);

  const BtnActive = (e) => {
    setCurrentActive(e.target.innerHTML);
    switch (e.target.innerHTML) {
      case "식당":
        setCategory("restaurant");
        break;
      case "카페":
        setCategory("cafe");
        break;
      case "숙소":
        setCategory("stay");
        break;
      case "병원":
        setCategory("hospital");
        break;
      case "기타":
        setCategory("etc");
        break;
    }
    
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
    flex-wrap: wrap;

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
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 12px;
    li {
      padding:8px 15px;
    }
  }
`;

export default Category;
