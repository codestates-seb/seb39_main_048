import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../../assets/Close.svg";
import UploadImg from "../registpage/UploadImg";

const MypageUpdate = ({ data, isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container opacity={isOpen ? "1" : "0"} display={isOpen ? "block" : "none"}>
      <BackDrop>
        <ViewGroup>
          <Viewer>
            <div className="header">
              <div>내 정보 수정하기</div>
              <Close onClick={handleClose} />
            </div>
            <Inner>
              <UploadImg/>
              <div className="userInfo">
                
              </div>
            </Inner>
          </Viewer>
        </ViewGroup>
      </BackDrop>
    </Container>
  );
};

const Container = styled.div`
  opacity: ${(props) => props.opacity};
  display: ${(props) => props.display};
`;

const BackDrop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
  animation: backOpen 0.4s ease-in-out;
  @keyframes backOpen {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ViewGroup = styled.div`
  position: absolute;
  width: 60vw;
  height: 100%;
  z-index: 100;
  animation: open 0.4s ease-in-out;
  animation-fill-mode: forwards;
  @keyframes open {
    from {
      transform: translateY(70vh);
      /* scale: 0.3; */
      opacity: 0.3;
    }
    to {
      transform: translateY(0px);
      /* scale: 1; */
      opacity: 1;
    }
  }
`;

const Viewer = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  margin: 100px 0;
  padding-bottom: 30px;

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
   display: flex;
`

export default MypageUpdate;
