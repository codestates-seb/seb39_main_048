import React from "react";
import styled from "styled-components";
import User1 from "./../../assets/people/User1.png";
import User2 from "./../../assets/people/User2.png";
import User3 from "./../../assets/people/User3.png";
import Score from "../ui/Score";
import { BREAK_POINT_TABLET_MINI } from "../../constant";
import { BREAK_POINT_TABLET } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";

const MainReviewCard = () => {
  return (
    <ReviewCard>
      <h2>사용자의 실제 후기를 들어보세요</h2>
      <h4>게시글에서 반려견을 키우는 더 많은 사용자의 후기를 확인해보세요</h4>
      <ReviewGroup>
        <Container>
          <img src={User1} />
          <Content>
            후기 참고해서 배변봉투는 꼭 챙겨갔어요! 주차공간은 있지만 좁아서
            불편했어요 ㅠ
          </Content>
          <Score />
        </Container>
        <Container>
          <img src={User2} />
          <Content padding={"60px 20px 8px 20px"}>
            서울사는데 동뭉병원 어디갈지 고민 많았는데 드디어 병원 정착했어요!
            다들 친절하네용!
          </Content>
          <Score />
        </Container>
        <Container>
          <img src={User3} />
          <Content>
            반려동반 숙소중에 마음에 드는 곳이 없었는데 후기글 믿고 갔더니 대
            성공입니다!!!!
          </Content>
          <Score />
        </Container>
      </ReviewGroup>
    </ReviewCard>
  );
};

const ReviewCard = styled.div`
  background-image: linear-gradient(to top, #fff 20%, #eff6f1 20%);
  height: 400px;
  text-align: center;
  h2 {
    padding-top: 70px;
    transition: all 0.3s;
  }
  h4 {
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 24px;
    transition: all 0.3s;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    height: 330px;
    h2 {
      padding-top: 50px;
      font-size: 20px;
    }
    h4 {
      font-size: 16px;
      margin-bottom: 0px;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    height: 600px;
    background-color: #eff6f1;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    height: 580px;
    h2 {
      font-size: 18px;
      padding-top: 40px;
    }
    h4 {
      font-size: 12px;
    }
  }
`;

const ReviewGroup = styled.div`
  display: flex;
  padding-top: 50px;
  width: 80vw;
  max-width: 1280px;
  margin: 0 auto;
  gap: 32px;
  justify-content: center;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 85vw;
    gap: 24px;
    justify-content: center;
    margin: 0 auto;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    flex-direction: column;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    gap: 16px;
    padding-top: 20px;
  }
`;

const Container = styled.div`
  width: 21vw;
  min-width: 290px;
  max-width: 365px;
  height: ${(props) => props.height || "160px"};
  position: relative;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 130px;
    position: absolute;
    top: 0px;
    left: 50%;
    margin: -60px 0 0 -60px;
    transition: all 0.3s;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 24vw;
    min-width: 235px;
    height: 160px;
    img {
      width: 100px;
      top: 10px;
      left: 50%;
      margin: -50px 0 0 -50px;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    align-items: flex-start;
    padding-left: 100px;
    padding-bottom: 16px;
    img {
      width: 75px;
      top: 70%;
      left: 65px;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    img {
      top: 65%;
    }
  }
`;

const Content = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 150%;
  text-align: center;
  padding: 60px 20px 8px 20px;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 12px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    font-size: 12px;
    padding: 16px 20px 3px 0px;
    text-align: start;
  }
`;

export default MainReviewCard;
