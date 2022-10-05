import React from "react";
import styled from "styled-components";
import Category from "../buttons/Category";
import usePost from "../../store/PostStore";
import TagSelect from "../registpage/TagSelect";
import { useEffect } from "react";
import { ReactComponent as Close } from "../../assets/Close.svg";
import DetailInfo from "../registpage/DetailInfo";
import KeywordSelectBtn from "../buttons/KeywordSelectBtn";

const UpdateForm = ({ data, handleClose }) => {
  const {
    placeName,
    setPlaceName
  } = usePost();

  useEffect(() => {
    setPlaceName(data.name);
  }, []);
  return (
    <Form>
      <div className="header">
        <div>수정하기</div>
        <Close onClick={handleClose} />
      </div>
      <Inner>
        <h3>반려견과 함께할 장소를 구분해 주세요</h3>
        <Category data={data.category}/>
        <h3>장소 이름(상호명)</h3>
        <input
          type="text"
          placeholder="장소나 상호명을 입력해주세요"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <h3>태그 선택</h3>
        <TagSelect data={data} bottom={"0"} margin={"36px"}/>
        <DetailInfo data={data} size={"16px"} width={"80%"} margin={"16px"}/>
        {/* <h3>해당하는 키워드 선택</h3>
        <KeywordSelectBtn data={data} gap={"12px"} width={"90%"}/> */}
      </Inner>
    </Form>
  );
};

const Form = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px 5%;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    background-color: #f5f5f5;
    svg {
      cursor: pointer;
    }
  }
`;

const Inner = styled.div`
  padding: 30px 5%;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 36px;
  }
  input {
    font-size: 12px;
    color: #666666;
    width: 80%;
    min-width: 250px;
    height: 32px;
    padding: 23px;
    border: 1px solid;
    border-color: #d7e2eb;
    border-radius: 10px;
  }
`;

export default UpdateForm;
