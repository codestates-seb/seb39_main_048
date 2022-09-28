import styled from "styled-components";
import axios from "axios";
import Category from "../components/buttons/Category";
import KeywordSelectBtn from "../components/buttons/KeywordSelectBtn";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Plus } from "../assets/Plus.svg";
import usePost from "../store/PostStore";
import DetailInfo from "../components/registpage/DetailInfo";
import TagSelect from "../components/registpage/TagSelect";
import { useEffect } from "react";
import AddressPost from "../components/registpage/AddressPost";

const PlaceRegistration = () => {
  const navigate = useNavigate();

  const {
    category,
    placeName,
    tags,
    keyWord,
    setSizeTags,
    setIsOnlyTags,
    setLocationTags,
    setKeyWord,
    placeImage,
    serviceTime,
    hompage,
    number,
    address,
    description,
    setPlaceName,
  } = usePost();

  const onCreate = async () => {
    await axios
      .post(`http://localhost:3001/place`, {
        category,
        placeName,
        tags,
        keyWord,
        placeImage,
        serviceTime,
        hompage,
        number,
        address,
        description,
      })
      .then((res) => res.data)
      .then(() => setLocationTags([]), setSizeTags([]), setKeyWord([]), setIsOnlyTags([]))
      .catch((err) => console.log(err));

    navigate("/place");
  };

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
            onChange={(e) => setPlaceName(e.target.value)}
          />
        </PlaceName>
        <TagSelect />
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
          <DetailInfo />
        </ImageDetail>
        <PlaceKeywordSelect>
          <div>장소에 해당하는 키워드를 선택해 주세요</div>
          <KeywordSelectBtn />
        </PlaceKeywordSelect>
        <AddressPost />
        <RegistrationBtn>
          <button className="Cancel">취소</button>
          <button className="Registration" onClick={onCreate}>
            등록하기
          </button>
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
    padding: 23px;
    border: 1px solid;
    border-color: #d7e2eb;
    border-radius: 10px;
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
        cursor: pointer;
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
    cursor: pointer;
  }

  .Cancel {
    background-color: #d9d9d9;
  }
  .Registration {
    background-color: #ffb653;
  }
`;

export default PlaceRegistration;
