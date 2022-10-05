import React, { useEffect } from "react";
import styled from "styled-components";
import usePost from "../../store/PostStore";
import { locationFilters, sizeFilters, isOnlyFilters } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";

const TagSelect = ({ data, bottom, margin }) => {
  const {
    sizeTags,
    locationTags,
    isOnlyTags,
    tags,
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
      const tags = data.tagNameList;
      const size = tags.slice(0, -2);
      setSizeTags(size);
      setIsOnlyTags([tags[tags.length - 2]]);
      setLocationTags([tags[tags.length - 1]]);
    }
  }, []);

  const handleClick = (e) => {
    const tagvalue = sizeTags.map((tag) => tag.tagName);
    if (tagvalue.includes(e.target.innerText)) {
      const removeData = sizeTags.filter((item) => {
        return item.tagName !== e.target.innerText;
      });
      return setSizeTags(removeData);
    }
    setSizeTags([...sizeTags, { tagName: e.target.innerText }]);
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
              className={
                sizeTags.length &&
                sizeTags.map((item) => item.tagName).includes(size)
                  ? "Active"
                  : ""
              }
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
              onClick={(e) => setIsOnlyTags([{ tagName: e.target.innerText }])}
              className={
                isOnlyTags[0] && isOnlyTags[0].tagName === only ? "Active" : ""
              }
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
              onClick={(e) =>
                setLocationTags([{ tagName: e.target.innerText }])
              }
              className={
                locationTags[0] && locationTags[0].tagName === place
                  ? "Active"
                  : ""
              }
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
      transition: all 0.3s;
      .Active {
        background-color: #4da772;
        color: #ffffff;
      }
      @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        gap: 10px;
        margin-top: 10px;
        margin-bottom: ${(props) => props.bottom || "12px"};
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
      @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        padding: 8px 15px;
        font-size: 12px;
      }
    }
  }

  .PlaceTagComment {
    color: #487bff;
    font-size: 12px;
    font-weight: 350;
  }
`;

export default TagSelect;
