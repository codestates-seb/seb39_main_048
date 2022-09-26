import React from "react";
import styled from "styled-components";
import BasicButton from "../components/buttons/BasicButton";
import HashTag from "../components/tags/HashTag";
import { ReactComponent as Star } from "../assets/Star.svg";
import { ReactComponent as LocationEmpty } from "../assets/LocationEmpty.svg";
import { ReactComponent as Clock } from "../assets/Clock.svg";
import { ReactComponent as Globe } from "../assets/Globe.svg";
import { ReactComponent as Phone } from "../assets/Phone.svg";
import { ReactComponent as Description } from "../assets/Description.svg";
import KeywordSelectBtn from "../components/buttons/KeywordSelectBtn";
import Footer from "../components/Footer";
import Reviews from "../components/review/Reviews";

const Detailpage = () => {
  const tags = ["소형견", "대형견"];
  return (
    <>
      <Detail>
        <div className="detailTop">
          <div className="PlaceName_category">
            <PlaceName>챱챱 케이크</PlaceName>
            <Category>카페</Category>
          </div>
          <div className="buttonGroup">
            <BasicButton bgcolor={"#D9D9D9"} text={"삭제"} />
            <BasicButton text={"수정"} />
          </div>
        </div>
        <div className="detailTop_info">
          <Score>
            <Star />
            <span>4.8</span>
          </Score>
          <ReviewInfo>후기 16개</ReviewInfo>
          <DataInfo>2022.09.22</DataInfo>
        </div>
        <div className="tagGroup">
          {tags.map((tag, idx) => (
            <HashTag text={tag} key={idx} />
          ))}
        </div>
        <div className="imgs_detailInfo">
          <Imgs></Imgs>
          <Infos>
            <h2>상세페이지</h2>
            <Info>
              <LocationEmpty />
              <DetailInfo>서울 서초구 서초중앙로 110 104호</DetailInfo>
            </Info>
            <Info>
              <Clock />
              <DetailInfo>
                목~토 12:00 ~ 19:30, 수 12:00 ~ 19:00, 일 12:00 ~ 17:00, (휴무)
                월,화요일
              </DetailInfo>
            </Info>
            <Info>
              <Globe />
              <DetailInfo>www.instagram.com/chyapchyap_cake</DetailInfo>
            </Info>
            <Info>
              <Phone />
              <DetailInfo>1833-5555</DetailInfo>
            </Info>
            <Info>
              <Description />
              <DetailInfo>볼 수 있는 너무너무 이쁜 수제 케이크 맛집</DetailInfo>
            </Info>
          </Infos>
        </div>
        <KeywordSelectBtn />
      </Detail>
      <Reviews />
      <Map>
        <Title>찾아가는 길</Title>
      </Map>
      <Footer />
    </>
  );
};

const Detail = styled.div`
  width: 80vw;
  padding-top: 144px;
  max-width: 1280px;
  margin: 0 auto;

  .detailTop {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .PlaceName_category,
  .buttonGroup {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .detailTop_info {
    margin-top: 16px;
    display: flex;
    gap: 16px;
  }

  .tagGroup {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;
  }

  .imgs_detailInfo {
    display: flex;
    gap: 48px;
    margin: 36px 0 50px 0;
  }
`;

const PlaceName = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const Category = styled.div`
  padding: 10px 20px;
  background-color: #4da772;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
`;

const Score = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  svg {
    margin-top: -6px;
  }
`;

const ReviewInfo = styled.div`
  text-decoration: underline;
  color: #666;
  font-size: 14px;
  cursor: pointer;
`;

const DataInfo = styled.div`
  color: #666;
  font-size: 14px;
`;

const Imgs = styled.div`
  width: 100%;
  height: 20vw;
  background-color: #f5f5f5;
`;

const Infos = styled.div`
  width: 100%;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;

const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const Map = styled.div`
  padding: 0 10%;
  margin-top: 64px;
`;

const Title = styled.h2`
  font-size: 20px;
`;

export default Detailpage;
