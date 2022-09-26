import React from "react";
import styled from "styled-components";
import Sidbar from "../components/mypage/Sidebar";
import MySummary from "../components/mypage/MySummary";
import Footer from "../components/Footer";
import MyBookMark from "../components/mypage/MyBookMark";
import useMenu from "../store/MenuStore";
import MyReview from "../components/mypage/MyReview";
import { BREAK_POINT_TABLET } from "../constant";
import { BREAK_POINT_PHONE } from "../constant";

const Mypage = () => {
  const { menu } = useMenu();

  return (
    <>
      <MyPage>
        <Sidbar />
        <Content>
          {menu === "마이페이지" ? <MySummary /> : ""}
          {menu === "북마크" || "내가 등록한 장소" ? <MyBookMark menu={menu}/> : ""}
          {menu === "내가 작성한 후기" ? <MyReview /> : ""}
        </Content>
      </MyPage>
      <Footer />
    </>
  );
};

const MyPage = styled.div`
  max-width: 1280px;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin: 0 auto;
    display: block;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 90vw;
  }
`;

const Content = styled.div`
  width: 100%;
`;

export default Mypage;
