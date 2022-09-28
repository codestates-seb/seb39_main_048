import React from "react";
import styled from "styled-components";
import usePost from "../../store/PostStore";
import { ReactComponent as Clock } from "../../assets/Clock.svg";
import { ReactComponent as Globe } from "../../assets/Globe.svg";
import { ReactComponent as Phone } from "../../assets/Phone.svg";
import { ReactComponent as Description } from "../../assets/Description.svg";

const DetailInfo = () => {
  const { setServiceTime, setHompage, setNumber, setDescription } = usePost();
  return (
    <DetailContainer>
      상세정보
      <div className="DetailInfo1">
        <Clock />
        <input
          placeholder="영업시간을 입력해 주세요"
          onChange={(e) => setServiceTime(e.target.value)}
        />
      </div>
      <span>예시 : 월~금 12:00 - 19:30 / 토, 일(정기휴무)</span>
      <div className="DetailInfo2">
        <Globe />
        <input
          placeholder="대표 사이트가 있다면 입력해 주세요"
          onChange={(e) => setHompage(e.target.value)}
        ></input>
      </div>
      <span>선택 입력란입니다. 사이트가 존재한다면 입력해 주세요 :)</span>
      <div className="DetailInfo3">
        <Phone />
        <input
          placeholder="대표 번호를 입력해 주세요"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>
      <div className="DetailInfo4">
        <Description />
        <input
          placeholder="장소를 대표할 한 줄 설명을 적어주세요"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 64px;
  width: 50%;
  display: flex;
  justify-content: start;
  flex-direction: column;

  span {
    font-size: 12px;
    font-weight: 350;
    color: #487bff;
    padding-left: 40px;
    margin-top: 6px;
  }

  .DetailInfo1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-top: 28px;

    input {
      font-size: 12px;
      color: #666666;
      width: 100%;
      height: 32px;
      padding: 23px;
      border: 1px solid;
      border-color: #d7e2eb;
      border-radius: 10px;
    }
  }

  .DetailInfo2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-top: 16px;

    input {
      font-size: 12px;
      color: #666666;
      width: 100%;
      height: 32px;
      padding: 23px;
      border: 1px solid;
      border-color: #d7e2eb;
      border-radius: 10px;
    }
  }

  .DetailInfo3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-top: 16px;

    input {
      font-size: 12px;
      color: #666666;
      width: 100%;
      height: 32px;
      padding: 23px;
      border: 1px solid;
      border-color: #d7e2eb;
      border-radius: 10px;
    }
  }

  .DetailInfo4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-top: 16px;

    input {
      font-size: 12px;
      color: #666666;
      width: 100%;
      height: 32px;
      padding: 23px;
      border: 1px solid;
      border-color: #d7e2eb;
      border-radius: 10px;
    }
  }
`;

export default DetailInfo;
