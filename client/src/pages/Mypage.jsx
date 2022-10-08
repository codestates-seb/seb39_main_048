import React from "react";
import styled from "styled-components";
import Sidbar from "../components/mypage/Sidebar";
import MySummary from "../components/mypage/MySummary";
import Footer from "../components/Footer";
import MyPlace from "../components/mypage/MyPlace";
import useMenu from "../store/MenuStore";
import MyReview from "../components/mypage/MyReview";
import { BREAK_POINT_TABLET } from "../constant";
import { BREAK_POINT_TABLET_MINI } from "../constant";
import { useGetMypageData } from "../hooks/useAPI";
import Loading from "../components/ui/Loading";

const Mypage = () => {
  const { menu } = useMenu();
  let URL = "";
  if (menu === "마이페이지") URL = "/api/v1/mypage/place";
  if (menu === "내가 등록한 장소") URL = "/api/v1/mypage/place";
  if (menu === "내가 작성한 후기") URL = "/api/v1/mypage/reply";
  const { data, isLoading, isError } = useGetMypageData(URL);

  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;

  return (
    <>
      <MyPage>
        <Sidbar />
        <Content>
          {menu === "마이페이지" ? <MySummary place={data} /> : ""}
          {menu === "내가 등록한 장소" ? <MyPlace data={data} /> : ""}
          {menu === "내가 작성한 후기" ? <MyReview data={data} /> : ""}
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
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    width: 85vw;
  }
`;

const Content = styled.div`
  width: 100%;
`;

export default Mypage;
