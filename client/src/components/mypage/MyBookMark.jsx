import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlaceCard1 from "../cards/PlaceCard1";
import { useGetMypageData } from "../../hooks/useAPI";
import { BREAK_POINT_TABLET } from "../../constant";

const MyBookMark = ({menu}) => {
  // 함수로 분리!
  // const { menu } = useMenu();
  // const [url, setUrl] = useState("/bookmark");
  let URL = "";

  if (menu === "북마크") URL = "/bookmark";
  if (menu === "내가 등록한 장소") URL = "/myplace";

  // useEffect(() => {
  //   if (menu === "북마크") setUrl("/bookmark");
  //   if (menu === "내가 등록한 장소") setUrl("/myplace");
  // }, [menu]);

  const { data, isLoading, isError } = useGetMypageData(URL);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  return (
    <BookMark>
      <Title> {menu}</Title>
      <BookmarkCards>
        {data.map((data, idx) => (
          <PlaceCard1 data={data} key={idx} />
        ))}
      </BookmarkCards>
    </BookMark>
  );
};

const BookMark = styled.div`
  padding-top: 144px;
  width: 100%;
  margin-bottom: 48px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    padding-top: 20px;
    margin-bottom: 48px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin-bottom: 16px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const BookmarkCards = styled.div`
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default MyBookMark;
