import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Star } from "../assets/Star.svg";
import { ReactComponent as LocationEmpty } from "../assets/LocationEmpty.svg";
import { ReactComponent as Clock } from "../assets/Clock.svg";
import { ReactComponent as Globe } from "../assets/Globe.svg";
import { ReactComponent as Phone } from "../assets/Phone.svg";
import { ReactComponent as Description } from "../assets/Description.svg";
import { useGetDetailPlace, useDeleteDetailPlace } from "../hooks/useAPI";
import { BREAK_POINT_TABLET_MINI } from "../constant";
import { BREAK_POINT_PHONE } from "../constant";
import styled from "styled-components";
import BasicButton from "../components/buttons/BasicButton";
import HashTag from "../components/tags/HashTag";
import Footer from "../components/Footer";
import Reviews from "../components/review/Reviews";
import DetailUpdate from "../components/detailUpdate/DetailUpdate";
import Loading from "../components/ui/Loading";
import usePostReview from "../store/PostReply";
import useMamber from "../store/MemberStore";
import jwt_decode from "jwt-decode";
import useLogin from "../store/LoginStore";

const Detailpage = () => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDetailPlace(id);
  const [category, setCategory] = useState("");
  const { replyLength, setReplyLength } = usePostReview();
  const { user, setUser } = useMamber();
  const { isLogin } = useLogin();

  useEffect(() => {
    if (isLogin) {
      const decoded = jwt_decode(localStorage.getItem("access_Token"));
      setUser(decoded.userId);
    }
  }, []);

  useEffect(() => {
    if (data) {
      switch (data.data.category) {
        case "restaurant":
          setCategory("식당");
          break;
        case "cafe":
          setCategory("카페");
          break;
        case "stay":
          setCategory("숙소");
          break;
        case "hospital":
          setCategory("병원");
          break;
        case "etc":
          setCategory("기타");
          break;
      }
    }
  }, [data]);

  useEffect(() => {
    setReplyLength(replyLength);
  }, [replyLength]);

  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;

  const onDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      useDeleteDetailPlace(id);
      navigate("/place");
    }
  };

  const handleUpdateOpen = () => {
    window.scrollTo(0, 0);
    setIsUpdateOpen(true);
  };

  return (
    <>
      <Detail>
        <div className="detailTop">
          <div className="PlaceName_category">
            <PlaceName>{data.data.name}</PlaceName>
            <Category>{category}</Category>
          </div>
          {user === data.data.userId ? (
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
                data={data.data}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="detailTop_info">
          <Score>
            <Star />

            <span>{data.data.scoreAvg.toFixed(1)}</span>
          </Score>
          <ReviewInfo>후기 {replyLength}개</ReviewInfo>

          <DataInfo>2022.09.22</DataInfo>
        </div>
        <div className="tagGroup">
          {data &&
            data.data.tagNameList.map((tag, idx) => (
              <HashTag text={tag.tagName} key={idx} />
            ))}
        </div>
        <div className="imgs_detailInfo">
          <Imgs>
            {data.data.placeImage ? <img src={data.data.placeImage} /> : ""}
          </Imgs>
          <Infos>
            <h2>상세 정보</h2>
            <Info>
              <LocationEmpty />
              <DetailInfo>{data.data.address}</DetailInfo>
            </Info>
            <Info>
              <Clock />
              <DetailInfo>{data.data.serviceTime}</DetailInfo>
            </Info>
            <Info>
              <Globe />
              <DetailInfo color={data.data.homepage ? "" : "#999"}>
                {data.data.homepage ? (
                  <a href={data.data.homepage}>{data.data.homepage}</a>
                ) : (
                  "대표 사이트가 존재하지 않습니다."
                )}
              </DetailInfo>
            </Info>
            <Info>
              <Phone />
              <DetailInfo>{data.data.number}</DetailInfo>
            </Info>
            <Info>
              <Description />
              <DetailInfo>{data.data.description}</DetailInfo>
            </Info>
          </Infos>
        </div>
        <KeywordBtn>
          {/* <div className="KeywordContainer">
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
          </div> */}
        </KeywordBtn>
      </Detail>
      <Reviews scoreAvg={data.data.scoreAvg.toFixed(1)} />

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
    height: 100%;
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
    transition: all 0.3s;
    flex-wrap: wrap;
  }

  .imgs_detailInfo {
    display: flex;
    gap: 48px;
    margin: 36px 0 50px 0;
    transition: all 0.3s;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    .imgs_detailInfo {
      display: block;
      margin: 36px 0 50px 0;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 85vw;
    padding-top: 100px;
  }
`;

const PlaceName = styled.div`
  font-size: 24px;
  font-weight: 500;
  transition: all 0.3s;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 20px;
  }
`;

const Category = styled.div`
  padding: 10px 20px;
  background-color: #4da772;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
  transition: all 0.3s;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 8px 15px;
    font-size: 12px;
  }
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
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 12px;
  }
`;

const DataInfo = styled.div`
  color: #666;
  font-size: 14px;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 12px;
  }
`;

const Imgs = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;

  img {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }
`;

const Infos = styled.div`
  width: 100%;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    margin: 36px 0;
    h2 {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    gap: 15px;
    margin-bottom: 12px;
  }
`;

const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  color: ${(props) => props.color || "#333"};
  line-height: 150%;

  a {
    color: #0059ff;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 14px;
  }
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
      transition: all 0.3s;
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
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
      ul {
        display: flex;
        justify-content: start;
        font-size: 12px;
        gap: 12px;
        padding: 14px;
      }
    }
  }
`;

export default Detailpage;
