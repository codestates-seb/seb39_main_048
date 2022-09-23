import React from "react";
import styled from "styled-components";
import PlaceCard1 from "../cards/PlaceCard1";
import useMenu from "../../store/Store";
import { useGetBookMark } from "../../hooks/useAPI";

const MyBookMark = () => {
  const { menu } = useMenu();
  const { data, isLoading, isError } = useGetBookMark();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;


  return (
    <BookMark>
      <Title> {menu}</Title>
      <BookmarkCards>
         {data.map((bookmark) => (
              <PlaceCard1 data={bookmark} key={bookmark.placeId}/>
            ))}
      </BookmarkCards>
    </BookMark>
  );
};

const BookMark = styled.div`
  padding-top: 144px;
  width: 100%;
  margin-bottom: 48px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin-bottom: 16px;
`;

const BookmarkCards = styled.div`
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default MyBookMark;
