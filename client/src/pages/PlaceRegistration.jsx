import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePostPlace } from "../hooks/useAPI";
import { ToastInfo } from "../constant";
import { BREAK_POINT_TABLET_MINI } from "../constant";
import { BREAK_POINT_PHONE } from "../constant";
import toast, { Toaster } from "react-hot-toast";
import Category from "../components/buttons/Category";
import Footer from "../components/Footer";
import usePost from "../store/PostStore";
import DetailInfo from "../components/registpage/DetailInfo";
import TagSelect from "../components/registpage/TagSelect";
import AddressPost from "../components/registpage/AddressPost";
import UploadImg from "../components/registpage/UploadImg";

const PlaceRegistration = () => {
  const navigate = useNavigate();
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
    setHomepage,
    setNumber,
    setAddress,
    setDescription,
    category,
    placeName,
    tags,
    keyWord,
    placeImage,
    serviceTime,
    homepage,
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
      setHomepage("");
      setNumber("");
      setAddress("");
      setDescription("");
    };
  }, []);

  const configData = {
    category,
    name: placeName,
    tagNameList: tags,
    placeImage,
    serviceTime,
    homepage,
    number,
    address,
    description,
  };

  // 검증부분 추가하기
  const onCreate = () => {
    const data = [
      category,
      placeName,
      tags,
      placeImage,
      serviceTime,
      number,
      address,
      description,
    ];
    const valid = data.filter((data) => data.length === 0);
    console.log("valid", valid.length);
    if (valid.length !== 0) {
      toast("필수 항목을 모두 작성해주세요!", { icon: "🥲", ...ToastInfo });
      window.scrollTo(0, 0);
      return;
    }

    if (placeImage.length) {
      const postPlace = usePostPlace(configData);
      postPlace().then((res) => {
        navigate("/place");
      });

      console.log("configData", configData)
    }
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
        {/* <PlaceKeywordSelect>
          <div>장소에 해당하는 키워드를 선택해 주세요</div>
          <KeywordSelectBtn />
        </PlaceKeywordSelect> */}
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
    padding: 40px;
    margin-top: 150px;
    line-height: 150%;
  }

  .ImgGroup {
    display: flex;
    gap: 32px;
    color: #333333;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 64px;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    padding-top: 110px;

    .TopComment {
      font-size: 14px;
      box-sizing: border-box;
      background: #f5f5f5;
      width: 100%;
      padding: 23px;
      margin-top: 0;
      line-height: 150%;
    }
    .ImgGroup {
      display: block;
    }
    .Title {
      font-size: 16px;
      margin-bottom: 16px;
    }
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
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 16px;
    margin-top: 48px;
    margin-bottom: 48px;

    .Category {
      margin-top: 16px;
    }
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
    min-width: 520px;
    width: 40%;
    height: 32px;
    margin-top: 24px;
    padding: 23px;
    border: 1px solid;
    border-color: #d7e2eb;
    border-radius: 10px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    input {
      min-width: 100%;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 16px;
    margin-bottom: 48px;
    input {
      height: 32px;
      margin-top: 24px;
      padding: 20px;
      border: 1px solid;
      border-color: #d7e2eb;
      border-radius: 10px;
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

const RegistrationBtn = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 40px;
  gap: 20px;
  position: relative;

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
