import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../assets/Star.svg";
import { ReactComponent as Dots } from "../../assets/Dots.svg";
import useDetectClose from "../../hooks/useDetectClose";
import HashTag from "../tags/HashTag";
import useMenu from "../../store/MenuStore";
import { useDeleteMyPlace } from "../../hooks/useAPI";

const PlaceCard1 = ({ data, width }) => {
  const { menu } = useMenu();
  const [isOpen, ref, handleOpen] = useDetectClose(false);

  const onDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      useDeleteMyPlace(data.placeId);
    }
  };

  return (
    <Card width={width}>
      <Link to={`/place/${data.placeId}`}>
        <PlaceImg>
          {data.placeImage ? <img src={data.placeImage}></img> : ""}
        </PlaceImg>
      </Link>
      <PlaceInfo>
        <Infos>
          <Title>
            <Link to={`/place/${data.placeId}`}>
              <PlaceName>{data.name}</PlaceName>
            </Link>
            <Score>
              <Star />
              {data.scoreAvg.toFixed(1)}
            </Score>
          </Title>
          <DotsArea>
            {menu === "내가 등록한 장소" ? (
              <div onClick={handleOpen} ref={ref}>
                <Dots />
              </div>
            ) : (
              ""
            )}
            {isOpen ? (
              <Buttons>
                <Button>수정</Button>
                <Button onClick={onDelete}>삭제</Button>
              </Buttons>
            ) : (
              ""
            )}
          </DotsArea>
        </Infos>
        <Address>{data.address}</Address>
        <Tags>
          {data.tagNameList &&
            data.tagNameList.map((item, idx) => (
              <HashTag text={item.tagName} key={idx} />
            ))}
        </Tags>
      </PlaceInfo>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #d7e2eb;
  border-radius: 10px;
  /* min-width: 220px; */
  position: relative;
  width: ${(props) => props.width || ""};
`;

const PlaceImg = styled.div`
  background-color: #f5f5f5;
  height: 150px;
  /* height: 100%; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    z-index: -100;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      scale: 1.05;
    }
  }
`;

const PlaceInfo = styled.div`
  padding: 20px 20px 25px 20px;
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 6px;
`;
const Address = styled.div`
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
  margin-bottom: 12px;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Title = styled.div`
  display: flex;
  /* gap: 8px; */
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PlaceName = styled.div`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
  cursor: pointer;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #999;
  gap: 3px;
  svg {
    margin-top: -3px;
  }
`;

const DotsArea = styled.div`
  position: relative;
  div {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }
`;

const Buttons = styled.div`
  position: absolute;
  width: 50px;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  right: 0;
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
`;

export default PlaceCard1;
