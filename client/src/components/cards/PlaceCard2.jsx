import React from "react";
import styled from "styled-components";
import HashTag from "../tags/HashTag";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { ReactComponent as BookMark } from "../../assets/BookMark.svg";

const PlaceCard2 = ({data}) => {
  const tags = ["소형견", "소형견", "소형견"];
  return (
    <Card>
      <PlaceImg></PlaceImg>

      <div>
        <PlaceInfo>
          <Info>
            <InfoTop>
              <PlaceName>{data.name}</PlaceName>
              <Score>
                <Star />
                <p>{data.scoreAvg}</p>
              </Score>
            </InfoTop>
            <Address>{data.address}</Address>
          </Info>
          <BookMark />
        </PlaceInfo>
        <Tags>
          {tags.map((tag, idx) => (
           <HashTag key={idx} text={tag}/>
          ))}
        </Tags>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  height: 182.5px;
  margin-bottom: 24px;
  border: 1px solid #d7e2eb;
  border-radius: 15px;
  color: #333;
`;

const PlaceImg = styled.div`
  border-radius: 15px 0 0 15px;
  width: 270px;
  background-color: #cecece;
`;

const PlaceInfo = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 22px;
  width: 100%;
  position: relative;
  svg:nth-child(2) {
    position: absolute;
    right: 0;
    top: 22px;
  }
`;
const Info = styled.div`
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;

const PlaceName = styled.div`
  font-size: 16px;
  font-weight: 600;
  max-width: 140px;
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
  align-content: flex-end;
  padding: 0 22px;
  gap: 8px;
  margin-bottom: 22px;
`; 

export default PlaceCard2;
