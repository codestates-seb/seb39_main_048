import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import useImage from "../../store/ImageStore";
import usePost from "../../store/PostStore";

const UploadImg = () => {
  const { file, setFile } = useImage();
  const {placeImage, setPlaceImage} = usePost();
  
  const [imgURL, setImgURL] = useState(null);
  const ref = useRef();

  const onChangeImage = (e) => {
    // const reader = new FileReader();
    // setFile(ref.current.files[0]);
    // console.log(file);

    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setImgURL(reader.result);
    //   console.log("이미지주소", reader.result);
    // };
    setFile(e.target.files[0]);
  };

  const uploadImage = async() => {
    let formData = new FormData();
    formData.append("api_key", import.meta.env.VITE_CLOUD_API_KEY);
    formData.append("upload_preset", import.meta.env.VITE_CLOUD_PRESET_NAME);
    formData.append("timestamp", (Date.now() / 1000) | 0);
    formData.append(`file`, file);

    const config = {
      header: { "Content-Type": "multipart/form-data" },
    };

    await axios
      .post(import.meta.env.VITE_CLOUD_API_URL, formData, config)
      .then((res) => {
        setPlaceImage(res.data.url);
        console.log(res.data.url);
      })
      .catch((err) => console.log(err));

      console.log("placeImage", placeImage)
  }

  return (
    <ImageDetail>
      <div className="ImgContainer">
        <div className="ImageUpload">
          이미지 업로드
          <input
            type="file"
            accept="image/*"
            ref={ref}
            onChange={onChangeImage}
          />
        </div>
        {imgURL ? (
          <img src={imgURL} />
        ) : (
          <>
            <div className="ImgPlus">
              <Plus />
            </div>
          </>
        )}
        <button onClick={uploadImage}>이미지 선택 완료</button>
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
      justify-content: space-between;
      input {
        width: 70px;
      }
    }
    .ImgPlus,
    img {
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
`;

export default UploadImg;
