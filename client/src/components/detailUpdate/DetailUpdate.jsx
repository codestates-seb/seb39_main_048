import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdataPlace } from "../../hooks/useAPI";
import UpdateForm from "./UpdateForm";
import BasicButton from "../buttons/BasicButton";
import usePost from "../../store/PostStore";
import { BREAK_POINT_TABLET } from "../../constant";

const DetailUpdate = ({ setIsOpen, isOpen, data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    setSizeTags,
    setIsOnlyTags,
    setLocationTags,
    setCategory,
    setPlaceName,
    setTags,
    setKeyWord,
    setPlaceImage,
    setServiceTime,
    setHomepage,
    setNumber,
    setAddress,
    setDescription,
    category,
    placeName,
    tags,
    keyWord,
    placeImage,
    serviceTime,
    homepage,
    number,
    description,
  } = usePost();

  useEffect(() => {
    return () => {
      setPlaceName("");
      setCategory("");
      setSizeTags([]);
      setIsOnlyTags([]);
      setLocationTags([]);
      setTags([]);
      setKeyWord([]);
      setPlaceImage("");
      setServiceTime("");
      setHomepage("");
      setNumber("");
      setAddress("");
      setDescription("");
    };
  }, []);

  const config = {
    category,
    name: placeName,
    tagNameList: tags,
    keyWord,
    serviceTime,
    homepage,
    number,
    description,
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  const handleUpdateClose = () => {
    setIsOpen(false);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  const onUpdate = () => {
    const updatePlace = useUpdataPlace(config, id);
    updatePlace()
      .then(
        () => setLocationTags([]),
        setSizeTags([]),
        setKeyWord([]),
        setIsOnlyTags([])
      );

    navigate("/place");
  };

  return (
    <UpdateContainer
      opacity={isOpen ? "1" : "0"}
      display={isOpen ? "block" : "none"}
    >
      <UpdateBackDrop onClick={handleUpdateClose}>
        <UpdateGroup onClick={(e) => e.stopPropagation()}>
          <UpdateViewer>
            <UpdateForm data={data} handleClose={handleUpdateClose} />
            <Buttons>
              <BasicButton text={"저장"} onUpdate={onUpdate} />
              <BasicButton
                text={"취소"}
                onCancel={onCancel}
                bgcolor={"#D9D9D9"}
              />
            </Buttons>
          </UpdateViewer>
        </UpdateGroup>
      </UpdateBackDrop>
    </UpdateContainer>
  );
};

const UpdateContainer = styled.div`
  opacity: ${(props) => props.opacity};
  display: ${(props) => props.display};
`;

const UpdateBackDrop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
  animation: backOpen 0.4s ease-in-out;
  @keyframes backOpen {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const UpdateGroup = styled.div`
  position: absolute;
  width: 60vw;
  height: 100%;
  z-index: 100;
  animation: open 0.4s ease-in-out;
  animation-fill-mode: forwards;
  @keyframes open {
    from {
      transform: translateY(70vh);
      /* scale: 0.3; */
      opacity: 0.3;
    }
    to {
      transform: translateY(0px);
      /* scale: 1; */
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 100%;
  }
`;

const UpdateViewer = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  margin: 100px 0;
  padding-bottom: 30px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    border-radius: 10px 10px 0 0;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  padding: 20px 5%;
`;

export default DetailUpdate;
