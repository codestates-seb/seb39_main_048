import React, { useEffect } from "react";
import styled from "styled-components";
import usePost from "../../store/PostStore";
import { locationFilters, sizeFilters, isOnlyFilters } from "../../constant";

const TagSelect = () => {
  const {
    setSizeTags,
    setLocationTags,
    sizeTags,
    locationTags,
    setTags,
    isOnlyTags,
    setIsOnlyTags,
  } = usePost();

  useEffect(() => {
    setTags([...sizeTags, ...isOnlyTags, ...locationTags]);
  }, [sizeTags, locationTags, isOnlyTags]);

  const handleClick = (e) => {
    if (sizeTags.includes(e.target.innerText)) {
      const removeData = sizeTags.filter((item) => item !== e.target.innerText);
      setSizeTags(removeData);
      return;
    }
    setSizeTags([...sizeTags, e.target.innerText]);
  };

  return (
    <Tag>
      <div>태그 선택</div>
      <div className="SizeTagSelect">
        <ul>
          {sizeFilters.map((size, idx) => (
            <li
              key={idx}
              onClick={handleClick}
              className={sizeTags.includes(size) ? "Active" : ""}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="IsOnlyTagSelect">
        <ul>
          {isOnlyFilters.map((only, idx) => (
            <li
              key={idx}
              onClick={(e) => setIsOnlyTags([e.target.innerText])}
              className={isOnlyTags.includes(only) ? "Active" : ""}
            >
              {only}
            </li>
          ))}
        </ul>
      </div>
      <div className="PlaceTagComment">위치 태그는 하나만 선택해 주세요</div>
      <div className="PlaceTagSelect">
        <ul>
          {locationFilters.map((place, idx) => (
            <li
              key={idx}
              onClick={(e) => setLocationTags([e.target.innerText])}
              className={locationTags.includes(place) ? "Active" : ""}
            >
              {place}
            </li>
          ))}
        </ul>
      </div>
    </Tag>
  );
};

const Tag = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 56px;
  max-width: 800px;

  .SizeTagSelect, .IsOnlyTagSelect, .PlaceTagSelect {
    ul {
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 14px;
      font-weight: 350;
      gap: 10px;
      margin-top: 24px;
      margin-bottom: 24px;
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
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
  }

  .PlaceTagComment {
    color: #487bff;
    font-size: 12px;
    font-weight: 350;
  }

`;

export default TagSelect;
