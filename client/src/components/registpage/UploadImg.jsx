import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { ToastInfo } from "../../constant";
import toast, { Toaster } from "react-hot-toast";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import useImage from "../../store/ImageStore";
import usePost from "../../store/PostStore";
import Loading from "../ui/Loading";
import { BREAK_POINT_TABLET_MINI } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";
import instance from "../../api/core/Config";

const UploadImg = () => {
  const { setFile } = useImage();
  const { setPlaceImage } = usePost();
  const [imgURL, setImgURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();

  
  const onChangeImage = async () => {

    // 클라우디너리에 올리기
    let formData = new FormData();
    formData.append("api_key", import.meta.env.VITE_CLOUD_API_KEY);
    formData.append("upload_preset", import.meta.env.VITE_CLOUD_PRESET_NAME);
    formData.append("timestamp", (Date.now() / 1000) | 0);
    formData.append(`file`, ref.current.files[0]);


    await instance
      .post(import.meta.env.VITE_CLOUD_API_URL, formData)
      .then((res) => {
        // delete axios.headers.common["Authorization"]
        setPlaceImage(res.data.url);
        console.log("이미지 올라가는 중", res.data);
      })
      .catch((err) => console.log(err));

    // 미리보기
    if (ref.current.files[0].size >= 3000000) {
      toast("사진 용량은 3MB이내로 올려주세요!", { icon: "🥲", ...ToastInfo });
      return;
    }
    const reader = new FileReader();
    setFile(ref.current.files[0]);
    console.log(ref.current.files[0].size);
    setIsLoading(true);
    reader.readAsDataURL(ref.current.files[0]);
    reader.onloadend = () => {
      setImgURL(reader.result);
    };
  };

  const onImageUpload = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  return (
    <ImageDetail>
      <Toaster />
      <div className="ImgContainer">
        <div className="ImageUpload">
          이미지 업로드
          <input
            type="file"
            accept="image/*"
            ref={ref}
            onChange={onChangeImage}
          />
          <button onClick={onImageUpload}>파일선택</button>
        </div>
        {imgURL ? (
          <img src={imgURL} />
        ) : (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="ImgPlus">
                <Plus />
                <span>이미지 3MB 이내</span>
              </div>
            )}
          </>
        )}
      </div>
    </ImageDetail>
  );
};

const ImageDetail = styled.div`
  width: 50%;
  button {
    color: #ffffff;
    border: 1px solid;
    border-radius: 10px;
    background-color: #ffb653;
    padding: 10px 20px;
    font-size: 12px;
    cursor: pointer;
  }
  .ImgContainer {
    .ImageUpload {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        width: 70px;
        display: none;
      }
    }
    .ImgPlus,
    img {
      transition: all 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #f5f5f5;
      height: 350px;
      width: 100%;
      margin-top: 16px;
      object-fit: cover;

      svg {
        margin-top: -20px;
      }

      span {
        font-size: 12px;
        color: #999999;
        margin-top: 24px;
      }
    }
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    width: 100%;
    margin-bottom: 64px;
    .ImageUpload {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    .ImgContainer {
      .ImgPlus,
      img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #f5f5f5;
        height: 250px;
        width: 100%;
        margin-top: 16px;
        object-fit: cover;
      }
    }
  }
`;

export default UploadImg;
