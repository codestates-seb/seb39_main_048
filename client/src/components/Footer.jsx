import { Link } from "react-router-dom";
import LogoWhite from "../assets/LogoWhite.png";
import styled from "styled-components";
import { BREAK_POINT_TABLET_MINI } from "../constant";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="LogoSection">
          <img src={LogoWhite}></img>
          <span>서울인 펫키지</span>
        </div>
        <div className="Copyright">
          <div className="Copycomment">
            <p>
              <b>서울 안</b>에서 펫 키우지,
            </p>
            <p>
              <b>서울인</b>들 펫 키우지,
            </p>
            <p>
              이 모든 것을 도와 줄 <b>패키지</b>
            </p>
          </div>
          <span>Copyright Ⓒ 2022 Team Safari</span>
        </div>
        <div className="Line1"></div>
        <div className="Menu">
          <p className="MenuTop">M E N U</p>
          <p>로그인</p>
          <p>회워가입</p>
          <p>지도로 찾기</p>
          <p>목록으로 찾기</p>
          <p>장소 상세페이지</p>
        </div>
        <div className="Line2"></div>
        <div className="Contact">
          <p className="ContactTop">C O N T A C T</p>
          <p>Notion</p>
          <p>GitHub</p>
          <p>Phone</p>
        </div>
      </FooterContainer>
      <MobileFooter>
        ⓒ 2022. <span> seoul in petkage</span> all rights reserved.
      </MobileFooter>
    </>
  );
};

const MobileFooter = styled.div`
  display: none;
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    display: flex;
    margin-top: 100px;
    color: #fff;
    background-color: #4da772;
    padding: 0 10%;
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    span {
      font-weight: 600;
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4da772;
  margin-top: 200px;
  padding: 0 10%;
  height: 240px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    display: none;
  }

  .LogoSection {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;

    img {
      width: 200px;
      height: 85px;
      margin-top: 40px;
    }
    span {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 40px;
    }
  }

  .Copyright {
    display: flex;
    justify-content: start;
    align-content: flex-start;
    flex-direction: column;
    color: #ffffff;
    gap: 56px;

    .Copycomment {
      padding-top: 40px;
      p {
        font-size: 14px;
        font-weight: 300;
      }
    }

    span {
      font-size: 10px;
      font-weight: 300;
      margin-bottom: 40px;
    }
  }

  .Line1 {
    width: 1px;
    height: 144px;
    border-right: 1px dotted #d7d7d7;
  }

  .Menu {
    display: flex;
    justify-content: start;
    align-content: center;
    flex-direction: column;
    color: #ffffff;
    height: 240px;
    gap: 6px;

    .MenuTop {
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 14px;
      margin-top: 48px;
    }

    p {
      font-size: 12px;
      font-weight: 300;
    }
  }

  .Line2 {
    width: 1px;
    height: 144px;
    border-right: 1px dotted #d7d7d7;
  }

  .Contact {
    display: flex;
    justify-content: start;
    align-content: center;
    flex-direction: column;
    color: #ffffff;
    height: 240px;
    gap: 10px;

    .ContactTop {
      font-size: 14px;
      font-weight: 500;
      margin-top: 48px;
      padding-bottom: 10px;
    }

    p {
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

export default Footer;
