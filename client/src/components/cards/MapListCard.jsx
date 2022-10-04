import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../assets/Star.svg";

import useDetectClose from "../../hooks/useDetectClose";
import HashTag from "../tags/HashTag";
import useMenu from "../../store/MenuStore";

const MapListCard = ({ data }) => {
  const { menu } = useMenu();
  const [isOpen, ref, handleOpen] = useDetectClose(false);

  return (
    <Card>
      <Link to={`/place/${data.id}`}>
        <PlaceImg>
          {data.placeImage ? <img src={data.placeImage}></img> : ""}
        </PlaceImg>
      </Link>
      <PlaceInfo>
        <Infos>
          <Title>
            <Link to={`/place/${data.id}`}>
              <PlaceName>{data.placeName}</PlaceName>
            </Link>
            <Score>
              <Star />
              4.6
            </Score>
          </Title>
        </Infos>
        <Address>{data.address}</Address>
        <Tags>
          {data.tags &&
            data.tags.map((item, idx) => <HashTag text={item} key={idx} />)}
        </Tags>
      </PlaceInfo>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #d7e2eb;
  border-radius: 10px;
  position: relative;
  width: 320px;
  height: 120px;
  opacity: 0.9;
`;

const PlaceImg = styled.div`
  background-color: #f5f5f5;
  height: 120px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  position: absolute;

  img {
    object-fit: fill;
    height: 120px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const PlaceInfo = styled.div`
  padding: 8px 5px 8px 120px;
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 6px;
`;
const Address = styled.div`
  font-size: 10px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
  margin-bottom: 5px;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const PlaceName = styled.div`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 190px;
  cursor: pointer;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #999;
  gap: 3px;
  svg {
    margin-top: -4px;
  }
`;

export default MapListCard;
