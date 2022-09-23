import Category from "../components/buttons/Category";
import KeywordSelectBtn from "../components/buttons/KeywordSelectBtn";
import Footer from "../components/Footer";

import { ReactComponent as Plus } from "../assets/Plus.svg";
import { ReactComponent as Clock } from "../assets/Clock.svg";
import { ReactComponent as Globe } from "../assets/Globe.svg";
import { ReactComponent as Phone } from "../assets/Phone.svg";
import { ReactComponent as Description } from "../assets/Description.svg";

import styled from "styled-components";

const PlaceRegistration = () => {
  const Sizes = ["전체", "소형견", "중형견", "대형견"];
  const Places = [
    "강남구･서초구",
    "강동구･송파구",
    "관악구･동작구",
    "영등포･구로･금천",
    "강서구･양천구",
    "서대문･은평구",
    "광진구･중랑구",
    "강북･노원･도봉",
    "동대문･성동구",
    "마포구･용산구",
    "중구･종로･성북",
  ];

  const SizeActive = () => {};
  const PlaceActive = () => {};

  return (
    <div>
      <Page>
        <div className="TopComment">
          📌 반려견과 함께한 추억을 모두에게 공유해 보세요! 오래도록 기억해
          보아요:)
        </div>
        <WithPlace>
          <div>반려견과 함께할 장소를 등록해 주세요</div>
          <div className="Category">
            <Category />
          </div>
        </WithPlace>
        <PlaceName>
          <div>장소 이름(상호명)</div>
          <input
            type="text"
            id="PlaceInput"
            placeholder="장소나 상호명을 입력해주세요"
          ></input>
        </PlaceName>
        <TagSelect>
          <div>태그 선택</div>
          <div className="SizeTagSelect">
            <ul>
              {Sizes.map((size, idx) => (
                <li key={idx} onClick={SizeActive}>
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="PlaceTagComment">
            위치 태그는 하나만 선택해 주세요
          </div>
          <div className="PlaceTagSelect">
            <ul>
              {Places.map((place, idx) => (
                <li key={idx} onClick={PlaceActive}>
                  {place}
                </li>
              ))}
            </ul>
          </div>
        </TagSelect>
        <ImageDetail>
          <div className="ImgContainer">
            <div className="ImageUpload">
              이미지 업로드
              <button>파일선택</button>
            </div>
            <div className="ImgPlus">
              <Plus />
              <span>이미지 추가 (최대 5장)</span>
            </div>
            {/* <div className="ImgList"></div> */}
          </div>
          <div className="DetailContainer">
            상세정보
            <div className="DetailInfo1">
              <Clock />
              <input placeholder="영업시간을 입력해 주세요"></input>
            </div>
            <span>예시 : 월~금 12:00 - 19:30 / 토, 일(정기휴무)</span>
            <div className="DetailInfo2">
              <Globe />
              <input placeholder="대표 사이트가 있다면 입력해 주세요"></input>
            </div>
            <span>선택 입력란입니다. 사이트가 존재한다면 입력해 주세요 :)</span>
            <div className="DetailInfo3">
              <Phone />
              <input placeholder="대표 번호를 입력해 주세요"></input>
            </div>
            <div className="DetailInfo4">
              <Description />
              <input placeholder="장소를 대표할 한 줄 설명을 적어주세요"></input>
            </div>
          </div>
        </ImageDetail>
        <PlaceKeywordSelect>
          <div>장소에 해당하는 키워드를 선택해 주세요</div>
          <KeywordSelectBtn />
        </PlaceKeywordSelect>
        <LocationInput>
          <div>주소 입력</div>
          <div className="LocationContainer">
            <input placeholder="장소나 상호명을 입력해 주세요"></input>
            <button type="주소 검색">주소 검색</button>
          </div>
        </LocationInput>
        <RegistrationBtn>
          <button className="Cancel">취소</button>
          <button className="Registration">등록하기</button>
        </RegistrationBtn>
      </Page>
      <Footer />
    </div>
  );
};

const Page = styled.div`
  padding: 0 10%;
  padding-top: 70px;

  .TopComment {
    color: #333333;
    font-size: 16px;
    box-sizing: border-box;
    background: #f5f5f5;
    width: 100%;
    height: 100px;
    padding: 40px;
    margin-top: 150px;
  }
`;

const WithPlace = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-top: 64px;
  margin-bottom: 64px;

  .Category {
    margin-top: 24px;
  }
`;

const PlaceName = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 64px;

  input {
    font-size: 12px;
    color: #666666;
    width: 40%;
    height: 32px;
    margin-top: 24px;
    padding: 12px;
    border: 1px solid;
    border-color: #d7e2eb;
    border-radius: 10px;
  }
`;

const TagSelect = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 56px;

  .SizeTagSelect {
    ul {
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 14px;
      font-weight: 350;
      gap: 10px;
      margin-top: 24px;
      margin-bottom: 24px;
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
  }

  .PlaceTagComment {
    color: #487bff;
    font-size: 12px;
    font-weight: 350;
  }

  .PlaceTagSelect {
    ul {
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      font-size: 14px;
      font-weight: 350;
      gap: 10px;
      margin-top: 24px;
      margin-bottom: 24px;
      max-width: 80%;
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
      margin-bottom: 8px;
      cursor: pointer;
    }
  }
`;

const ImageDetail = styled.div`
  display: flex;
  gap: 32px;
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 64px;

  .ImgContainer {
    width: 50%;

    .ImageUpload {
      display: flex;
      justify-content: space-between;
      button {
        color: #ffffff;
        border: 1px solid;
        border-radius: 10px;
        background-color: #ffb653;
        padding: 10px 20px;
        font-size: 12px;
      }
    }
    .ImgPlus {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #f5f5f5;
      height: 350px;
      margin-top: 16px;

      svg {
        margin-top: -20px;
      }

      span {
        font-size: 12px;
        color: #999999;
        margin-top: 24px;
      }
    }
    /* .ImgList {
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      background: #999999;
      flex-wrap: wrap;
      width: 25%;
      height: 80px;
      margin-top: 20px;
    } */
  }

  .DetailContainer {
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
        padding: 12px;
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
        padding: 12px;
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
        padding: 12px;
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
        padding: 12px;
        border: 1px solid;
        border-color: #d7e2eb;
        border-radius: 10px;
      }
    }
  }
`;

const PlaceKeywordSelect = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 64px;

  div {
    margin-bottom: 24px;
  }
`;

const LocationInput = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 128px;

  .LocationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid;
    border-color: #d7e2eb;
    border-radius: 10px;
    margin-top: 24px;
    padding: 30px;
    width: 60%;
    height: 100px;
    gap: 30px;

    input {
      font-size: 12px;
      border: 1px solid;
      border-color: #d7e2eb;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      padding: 12px;
    }
    button {
      color: #ffffff;
      font-size: 12px;
      font-weight: 500;
      background-color: #ffb653;
      border: 1px solid transparent;
      border-radius: 10px;
      height: 100%;
      width: 20%;
    }
  }
`;

const RegistrationBtn = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 40px;
  gap: 20px;

  button {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 10px;
    height: 100%;
    padding: 10px;
  }

  .Cancel {
    background-color: #d9d9d9;
  }
  .Registration {
    background-color: #ffb653;
  }
`;

export default PlaceRegistration;