import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePostPlace } from "../hooks/useAPI";
import { ToastInfo } from "../constant";
import toast, { Toaster } from "react-hot-toast";
import Category from "../components/buttons/Category";
import KeywordSelectBtn from "../components/buttons/KeywordSelectBtn";
import Footer from "../components/Footer";
import usePost from "../store/PostStore";
import DetailInfo from "../components/registpage/DetailInfo";
import TagSelect from "../components/registpage/TagSelect";
import AddressPost from "../components/registpage/AddressPost";
import UploadImg from "../components/registpage/UploadImg";
import useImage from "../store/ImageStore";

const PlaceRegistration = () => {
  const navigate = useNavigate();
  const { file, setFile } = useImage();

  const {
    setSizeTags,
    setIsOnlyTags,
    setLocationTags,
    setCategory,
    setPlaceName,
    setTags,
    setKeyWord,
    setPlaceImage,
    setServiceTime,
    setHompage,
    setNumber,
    setAddress,
    setDescription,
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
  } = usePost();

  useEffect(() => {
    return () => {
      setPlaceName("");
      setCategory("");
      setSizeTags([]);
      setIsOnlyTags([]);
      setLocationTags([]);
      setTags([]);
      setKeyWord([]);
      setPlaceImage("");
      setServiceTime("");
      setHompage("");
      setNumber("");
      setAddress("");
      setDescription("");
    };
  }, []);

  const configData = {
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
  };

  // 검증부분 추가하기
  const onCreate = async () => {
    const postPlace = usePostPlace(configData);
    postPlace().then((res) => res.data);

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
          <div>반려견과 함께할 장소를 구분해 주세요</div>
          <div className="Category">
            <Category />
          </div>
        </WithPlace>
        <PlaceName>
          <div>장소 이름(상호명)</div>
          <input
            type="text"
            placeholder="장소나 상호명을 입력해주세요"
            onChange={(e) => setPlaceName(e.target.value)}
          />
        </PlaceName>
        <div className="Title">태그 선택</div>
        <TagSelect />
        <div className="ImgGroup">
          <UploadImg />
          <DetailInfo />
        </div>
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
      <Toaster />
    </div>
  );
};

const Page = styled.div`
  padding: 0 10%;
  padding-top: 70px;

  .Title {
    color: #333333;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
  }

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

  .ImgGroup {
    display: flex;
    gap: 32px;
    color: #333333;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 64px;
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
