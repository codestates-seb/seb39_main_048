import React, { useEffect } from "react";
import styled from "styled-components";
import usePost from "../../store/PostStore";
import { ReactComponent as Clock } from "../../assets/Clock.svg";
import { ReactComponent as Globe } from "../../assets/Globe.svg";
import { ReactComponent as Phone } from "../../assets/Phone.svg";
import { ReactComponent as Description } from "../../assets/Description.svg";
import { BREAK_POINT_TABLET_MINI } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";

const DetailInfo = ({ data, size, width, margin }) => {
  const {
    setServiceTime,
    setHomepage,
    setNumber,
    setDescription,
    serviceTime,
    homepage,
    number,
    description,
  } = usePost();
  useEffect(() => {
    if (data) {
      setServiceTime(data.serviceTime);
      setHomepage(data.homepage);
      setNumber(data.number);
      setDescription(data.description);
    }
  }, []);
  return (
    <DetailContainer size={size} width={width} margin={margin}>
      상세정보
      <div className="DetailInfo firstItem">
        <Clock />
        <input
          placeholder="영업시간을 입력해 주세요"
          defaultValue={data ? serviceTime : ""}
          onChange={(e) => setServiceTime(e.target.value)}
          margin={margin}
        />
      </div>
      <span>예시 : 월~금 12:00 - 19:30 / 토, 일(정기휴무)</span>
      <div className="DetailInfo">
        <Globe />
        <input
          placeholder="대표 사이트가 있다면 입력해 주세요"
          defaultValue={data ? homepage : ""}
          onChange={(e) => setHomepage(e.target.value)}
        ></input>
      </div>
      <span>선택 입력란입니다. 사이트가 존재한다면 입력해 주세요</span>
      <div className="DetailInfo">
        <Phone />
        <input
          placeholder="대표 번호를 입력해 주세요"
          defaultValue={data ? number : ""}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>
      <div className="DetailInfo">
        <Description />
        <input
          placeholder="장소를 대표할 한 줄 설명을 적어주세요"
          defaultValue={data ? description : ""}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  color: #333333;
  font-size: ${(props) => props.size || "20px"};
  font-weight: 600;
  margin-bottom: 64px;
  width: ${(props) => props.width || "50%"};
  display: flex;
  justify-content: start;
  flex-direction: column;
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    width: ${(props) => props.width || "100%"};
    font-size: ${(props) => props.size || "18px"};
  }

  span {
    font-size: 12px;
    font-weight: 350;
    color: #487bff;
    padding-left: 40px;
    margin-top: 6px;
  }

  input {
    font-size: 12px;
    color: #666666;
    width: 100%;
    height: 32px;
    padding: 23px;
    border: 1px solid;
    border-color: #d7e2eb;
    border-radius: 10px;
    transition: all 0.3s;
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
      padding: 20px;
    }
  }

  .DetailInfo {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 16px;
  }
  .firstItem {
    margin-top: ${(props) => props.margin || "28px"};
    transition: all 0.3s;
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
      margin-top: ${(props) => props.margin || "20px"};
    }
  }
`;

export default DetailInfo;
