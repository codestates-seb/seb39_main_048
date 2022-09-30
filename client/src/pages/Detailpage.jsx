import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Star } from "../assets/Star.svg";
import { ReactComponent as LocationEmpty } from "../assets/LocationEmpty.svg";
import { ReactComponent as Clock } from "../assets/Clock.svg";
import { ReactComponent as Globe } from "../assets/Globe.svg";
import { ReactComponent as Phone } from "../assets/Phone.svg";
import { ReactComponent as Description } from "../assets/Description.svg";
import { useGetDetailPlace, useDeleteDetailPlace } from "../hooks/useAPI";
import { Keywords } from "../constant";
import styled from "styled-components";
import BasicButton from "../components/buttons/BasicButton";
import HashTag from "../components/tags/HashTag";
import Footer from "../components/Footer";
import Reviews from "../components/review/Reviews";
import DetailUpdate from "../components/detailpage/DetailUpdate";

const Detailpage = () => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDetailPlace(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  const onDelete = () => {
    window.confirm("삭제하시겠습니까?");
    useDeleteDetailPlace(id);
    navigate("/place");
  };

  const handleUpdateOpen = () => {
    window.scrollTo(0, 0);
    setIsUpdateOpen(true);
    console.log("isUpdateOpen", isUpdateOpen);
  };

  return (
    <>
      <Detail>
        <div className="detailTop">
          <div className="PlaceName_category">
            <PlaceName>{data.placeName}</PlaceName>
            <Category>{data.category}</Category>
          </div>
          <div className="buttonGroup">
            <BasicButton
              bgcolor={"#D9D9D9"}
              text={"삭제"}
              onDelete={onDelete}
            />
            <BasicButton text={"수정"} handleUpdateOpen={handleUpdateOpen} />
            <DetailUpdate
              setIsOpen={setIsUpdateOpen}
              isOpen={isUpdateOpen}
              data={data}
            />
          </div>
        </div>
        <div className="detailTop_info">
          <Score>
            <Star />
            <span>{data.score}</span>
          </Score>
          <ReviewInfo>후기 16개</ReviewInfo>
          <DataInfo>2022.09.22</DataInfo>
        </div>
        <div className="tagGroup">
          {data &&
            data.tags.map((tag, idx) => <HashTag text={tag} key={idx} />)}
        </div>
        <div className="imgs_detailInfo">
          <Imgs></Imgs>
          <Infos>
            <h2>상세 정보</h2>
            <Info>
              <LocationEmpty />
              <DetailInfo>{data.address}</DetailInfo>
            </Info>
            <Info>
              <Clock />
              <DetailInfo>{data.serviceTime}</DetailInfo>
            </Info>
            <Info>
              <Globe />
              <DetailInfo color={data.hompage ? "" : "#999"}>
                {data.hompage
                  ? data.hompage
                  : "대표 사이트가 존재하지 않습니다."}
              </DetailInfo>
            </Info>
            <Info>
              <Phone />
              <DetailInfo>{data.number}</DetailInfo>
            </Info>
            <Info>
              <Description />
              <DetailInfo>{data.description}</DetailInfo>
            </Info>
          </Infos>
        </div>
        <KeywordBtn>
          <div className="KeywordContainer">
            <ul>
              {Keywords.map((item, idx) => (
                <li
                  key={idx}
                  className={data.keyWord.includes(item) ? "Active" : "kk"}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </KeywordBtn>
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
  margin-bottom: 18px;
`;

const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  color: ${(props) => props.color || "#333"};
`;

const Map = styled.div`
  padding: 0 10%;
  margin-top: 64px;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const KeywordBtn = styled.div`
  .KeywordContainer {
    border: 1px solid;
    border-radius: 10px;
    border-color: #d7e2eb;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      font-size: 12px;
      font-weight: 350;
      gap: 24px;
      padding: 24px;
    }
    .Active {
      border: 1px solid #4da772;
      background-color: #4da772;
      color: #ffffff;
    }

    li {
      padding: 10px 15px;
      color: #333;
      border: 1px solid;
      border-radius: 50px;
      border-color: #f5f5f5;
      background-color: #f5f5f5;
    }
  }
`;

export default Detailpage;
