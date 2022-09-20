import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { ReactComponent as BookMark } from "../../assets/BookMark.svg";

const PlaceCard_Type1 = () => {
  const tags = ["소형견","소형견","소형견", "송파구-강동구"];
  return (
    <Card>
      <PlaceImg></PlaceImg>

      <PlaceInfo>
        <Info>
          <InfoTop>
            <PlaceName>로얄 테라스 가든</PlaceName>
            <Score>
              <Star />
              <p>4.3</p>
            </Score>
          </InfoTop>
          <Address>서울 송파구 올림픽로 300</Address>
        </Info>
        <BookMark />
      </PlaceInfo>
      <Tags>
        {tags.map((tag, idx) => (
          <Tag key={idx}># {tag}</Tag>
        ))}
      </Tags>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #d7e2eb;
  border-radius: 15px;
  color: #333;
`;

const PlaceImg = styled.div`
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 165px;
  background-color: #cecece;
`;

const PlaceInfo = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  padding: 22px;
  width: 100%;
  justify-content: space-between;
  position: relative;
  svg:nth-child(2) {
    position: absolute;
    right: 22px;
  }
`;
const Info = styled.div``;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;

const PlaceName = styled.div`
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.5;
  p {
    font-size: 14px;
    color: #999;
  }
  svg {
    margin-top: -3px;
  }
`;

const Address = styled.div`
  font-size: 14px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 22px;
  gap: 8px;
  margin-bottom: 22px;
`;

const Tag = styled.div`
  padding: 5px 10px;
  color: #999;
  border: 1px solid #999;
  border-radius: 50px;
  font-size: 12px;
`;

export default PlaceCard_Type1;