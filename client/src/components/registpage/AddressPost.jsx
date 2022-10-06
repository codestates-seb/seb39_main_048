import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DaumPostcodeEmbed from "react-daum-postcode";
import usePost from "../../store/PostStore";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { BREAK_POINT_TABLET_MINI } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";

const AddressPost = () => {
  const { address, setAddress } = usePost();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (address) {
      setIsOpen(!isOpen);
    }
  }, [address]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    setAddress(fullAddress);

  };

  return (
    <LocationInput>

      <div className="title">주소 입력</div>
      <div className="LocationContainer">
        <div className="searchAddress">
          <input
            placeholder="주소를 검색해주세요"
            defaultValue={address}
            onClick={() => setIsOpen(true)}
            readOnly
          />
          {isOpen ? (
            <button onClick={handleClick}>닫기</button>
          ) : (
            <button onClick={handleClick}>주소 검색</button>
          )}
        </div>
      </div>

      {isOpen ? (
        <Modal onClick={handleClick}>
          <Container>
            <CloseButton>
              <Close onClick={handleClick}/>
            </CloseButton>
            <DaumPostcodeEmbed
              style={{
                width: "350px",
                border: "1px solid #d7e2eb",
                marginTop: "16px",
              }}
              onComplete={handleComplete}
            />
          </Container>
        </Modal>
      ) : (
        ""
      )}
    </LocationInput>
  );
};

const LocationInput = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 128px;

  .LocationContainer {
    background-color: #f5f5f5;
    border: 1px solid;
    border-color: #d7e2eb;
    border-radius: 10px;
    margin-top: 24px;
    padding: 30px;
    width: 70%;
    gap: 30px;

    @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
      width: 100%;
    }

    input {
      font-size: 12px;
      border: 1px solid;
      border-color: #d7e2eb;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      padding: 12px;
      min-width: 220px;
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
      padding: 10px;
      cursor: pointer;
    }
  }

  .searchAddress {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    .title {
      font-size: 18px;
    }
    .LocationContainer {
      padding: 10px;
      input {
        margin-bottom: 10px;
      }
      .searchAddress {
        display: block;
      }
      button {
        width: 100%;
      }
    }
  }
`;

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 300;
`;

const Container = styled.div`
  position: relative;

`

const CloseButton = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  width: 100%;
  top: -20px;
  padding: 8px 30px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export default AddressPost;
