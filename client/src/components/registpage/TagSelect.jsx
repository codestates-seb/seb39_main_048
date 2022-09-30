import React, {  useEffect } from "react";
import styled from "styled-components";
import usePost from "../../store/PostStore";
import { locationFilters, sizeFilters, isOnlyFilters } from "../../constant";

const TagSelect = ({ data, bottom, margin }) => {
  const {
    sizeTags,
    locationTags,
    isOnlyTags,
    setTags,
    setSizeTags,
    setLocationTags,
    setIsOnlyTags,
  } = usePost();

  useEffect(() => {
    setTags([...sizeTags, ...isOnlyTags, ...locationTags]);
  }, [sizeTags, locationTags, isOnlyTags]);

  useEffect(() => {
    if (data) {
      setLocationTags(data.tags[data.tags.length-1])
      setIsOnlyTags(data.tags[data.tags.length-2])
      setSizeTags(data.tags.slice(0, -2))
    }
  }, []);

  const handleClick = (e) => {
    if (sizeTags.includes(e.target.innerText)) {
      const removeData = sizeTags.filter((item) => item !== e.target.innerText);
      setSizeTags(removeData);
      return;
    }
    setSizeTags([...sizeTags, e.target.innerText]);
  };

  return (
    <Tag bottom={bottom} margin={margin}>
      <div className="PlaceTagComment">
        사이즈 태그는 중복 선택이 가능합니다.
      </div>

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
  margin-bottom: ${(props) => props.margin || "56px"};
  max-width: 800px;

  .SizeTagSelect,
  .IsOnlyTagSelect,
  .PlaceTagSelect {
    ul {
      display: flex;
      justify-content: start;
      align-items: center;
      font-weight: 350;
      gap: 10px;
      margin-top: 14px;
      margin-bottom: ${(props) => props.bottom || "24px"};
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
      font-size: 14px;
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
