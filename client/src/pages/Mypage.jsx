import React from "react";
import styled from "styled-components";
import Sidbar from "../components/mypage/Sidebar";
import MySummary from "../components/mypage/MySummary";
import Footer from "../components/Footer";
import MyBookMark from "../components/mypage/MyBookMark";
import useMypag from "../store/Store";

const Mypage = () => {
  const { menu } = useMypag();

  return (
    <>
      <MyPage>
        <Sidbar />
        <Content>
          {menu === "마이페이지" ? <MySummary /> : ""}
          {menu === "북마크" ? <MyBookMark /> : ""}
          {menu === "내가 등록한 장소" ? <MyBookMark /> : ""}
        </Content>
      </MyPage>
      <Footer />
    </>
  );
};

const MyPage = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
`;

export default Mypage;
