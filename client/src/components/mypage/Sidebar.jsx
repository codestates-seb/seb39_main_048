import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useMenu from "../../store/MenuStore";
import { ReactComponent as UserImg } from "../../assets/UserImg.svg";
import { ReactComponent as CirclePlus } from "../../assets/CirclePlus.svg";
import { useGetMyInfo, useUpdataMyInfo } from "../../hooks/useAPI";
import { myMenus } from "../../constant";
import { BREAK_POINT_TABLET } from "../../constant";
import { BREAK_POINT_TABLET_MINI } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";
import Loading from "../ui/Loading";
import useUser from "../../store/UserStore";
import useImage from "../../store/ImageStore";
import instance from "../../api/core/Config";

const Sidbar = () => {
  const { setMenu } = useMenu();
  const { userName, userImg, setUserName, setUserImg } = useUser();
  const { setFile } = useImage();
  const [currentActive, setCurrentActive] = useState("마이페이지");
  const [isMyOpen, setIsMyOpen] = useState(false);
  const [imgURL, setImgURL] = useState(null);
  const ref = useRef();

  useEffect(() => {
    return () => {
      setMenu("마이페이지");
    };
  }, []);

  const { data, isLoading, isError } = useGetMyInfo();
  if (isLoading) return <Loading />;
  if (isError) return <div>ERR...</div>;


  const onChangeImage = async () => {
    // 클라우디너리에 올리기
    let formData = new FormData();
    formData.append("api_key", import.meta.env.VITE_CLOUD_API_KEY);
    formData.append("upload_preset", import.meta.env.VITE_CLOUD_PRESET_NAME);
    formData.append("timestamp", (Date.now() / 1000) | 0);
    formData.append(`file`, ref.current.files[0]);

    await instance
      .post(import.meta.env.VITE_CLOUD_API_URL, formData)
      .then((res) => {
        setUserImg(res.data.url);
      })
      .catch((err) => console.log(err));

    // 미리보기
    if (ref.current.files[0].size >= 1000000) {
      toast("사진 용량은 1MB이내로 올려주세요!", { icon: "🥲", ...ToastInfo });
      return;
    }
    const reader = new FileReader();
    setFile(ref.current.files[0]);

    reader.readAsDataURL(ref.current.files[0]);
    reader.onloadend = () => {
      setImgURL(reader.result);
    };
  };

  const handleActive = (e) => {
    setCurrentActive(e.target.innerText);
    setMenu(e.target.innerText);
    window.scrollTo(0, 0);
  };

  const config = {
    userImage : userImg,
    name: userName,
  };

  const onUpdate = () => {
    const updateMyinfo = useUpdataMyInfo(config);
    updateMyinfo().then((data) => setUserName(data));
    setIsMyOpen(false);
  };

  const onImageUpload = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  return (
    <>
      <SideBar>
        <div className="sticky">
          <Title>내 프로필</Title>

          <SideBarContent>
            <UserInfo>
              {isMyOpen ? (
                <input
                  className="none"
                  type="file"
                  accept="image/*"
                  ref={ref}
                  onChange={onChangeImage}
                />
              ) : (
                ""
              )}

              <div className="img">
                {!isMyOpen ? data.data.userImage ? <img src={data.data.userImage} /> : (
                  <UserImg />
                ) : 
                  imgURL ? <img src={imgURL} /> : <CirclePlus onClick={onImageUpload} cursor={"pointer"} />
                }
                {/* {data && data.data.userImage ? (
                  <img src={data.data.userImage} />
                ) : (
                  <div>
                    {isMyOpen ? (
                      imgURL ? (
                        <img src={imgURL} />
                      ) : (
                        <CirclePlus
                          onClick={onImageUpload}
                          cursor={"pointer"}
                        />
                      )
                    ) : (
                      <UserImg />
                    )}
                  </div>
                )} */}
              </div>
              <div className="userInfo">
                {isMyOpen ? (
                  <>
                    <UpdateName
                      defaultValue={data.data.name}
                      onChange={(e) => setUserName(e.target.value)}
                    ></UpdateName>
                    <Buttons>
                      <Button
                        onClick={() => setIsMyOpen(!isMyOpen)}
                        bgcolor={"#fff"}
                        color={"#4da772"}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={onUpdate}
                        bgcolor={"#4da772"}
                        color={"#fff"}
                      >
                        Save
                      </Button>
                    </Buttons>
                  </>
                ) : (
                  <>
                    <UserName>{data.data.name}</UserName>
                    <Button onClick={() => setIsMyOpen(!isMyOpen)}>Edit</Button>
                  </>
                )}
              </div>
            </UserInfo>

            <MyMenu>
              {myMenus.map((menu, idx) => (
                <div
                  className={currentActive === menu ? "menu active" : "menu"}
                  onClick={handleActive}
                  key={-idx}
                >
                  <Menu key={idx}>{menu}</Menu>
                </div>
              ))}
            </MyMenu>
          </SideBarContent>
        </div>
      </SideBar>
    </>
  );
};

const SideBar = styled.div`
  width: 27%;
  padding-top: 144px;
  margin-right: 24px;
  cursor: default;
  .sticky {
    position: sticky;
    top: 144px;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 100%;
    margin-right: 0;
    padding-top: 130px;
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding-top: 80px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #333;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    display: none;
  }
`;

const SideBarContent = styled.div`
  width: 100%;
  height: 40vw;
  border: 1px solid #d7e2eb;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: auto;
    height: auto;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    display: block;
    padding: 15px;
  }
`;

const UserInfo = styled.div`
  text-align: center;
  .img {
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      width: 100px;
      border-radius: 50px;
    }
  }

  .none {
    display: none;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    display: flex;
    align-items: center;
    gap: 12px;
    .img {
      width: 50px;
      height: 50px;
      margin: 0;
      img {
        width: 50px;
        border-radius: 50px;
      }
    }
  }
`;

const UserName = styled.div`
  margin: 15px 0 20px 0;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin: 0 0 10px 0;
  }
`;

const UpdateName = styled.input`
  padding: 5px;
  margin: 10px 0 14px 0;
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.span`
  font-size: 12px;
  border-radius: 50px;
  border: 1px solid #4da772;
  color: ${(props) => props.color || "#4da772"};
  background-color: ${(props) => props.bgcolor || "#fff"};
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.color || "#fff"};
    background-color: ${(props) => props.bgcolor || "#4da772"};
  }
`;

const MyMenu = styled.ul`
  margin-top: 3vw;
  width: 100%;
  cursor: pointer;
  .active {
    background-color: #f3f3f3;
  }

  .menu {
    display: flex;
    justify-content: space-between;

    border-radius: 50px;
    margin-top: 5px;
    font-size: 14px;
    cursor: pointer;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    display: flex;
    align-items: center;
    margin-top: 0;
    width: auto;
    gap: 5px;
    .menu {
      margin-top: 0;
    }
    @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
      margin-top: 15px;
      flex-wrap: wrap;
    }
  }
`;

const Menu = styled.li`
  padding: 1vw 1.5vw;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 14px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET_MINI}px) {
    padding: 1.5vw 2vw;
    font-size: 13px;
  }
`;

export default Sidbar;
