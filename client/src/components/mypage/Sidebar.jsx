import React, { useState } from "react";
import styled from "styled-components";
import User from "../../assets/User.png";
import { ReactComponent as Location } from "../../assets/Location.svg";
import useMenu from "../../store/MenuStore";
import { myMenus } from "../../constant";
import { BREAK_POINT_TABLET } from "../../constant";
import { BREAK_POINT_PHONE } from "../../constant";
import { useEffect } from "react";

const Sidbar = () => {
  const { setMenu } = useMenu();
  const [currentActive, setCurrentActive] = useState("마이페이지");

  useEffect(() => {
    return() => {
      setMenu('마이페이지')
    }
  },[])

  const handleActive = (e) => {
    setCurrentActive(e.target.innerText);
    setMenu(e.target.innerText);
  };


  return (
    <SideBar>
      <div className="sticky">
        <Title>내 프로필</Title>

        <SideBarContent>
          <UserInfo>
            <div className="img">
              <img src={User} />
            </div>
            <div>
              <UserName>kanghyew0n</UserName>
              <UserLoca>
                <Location />
                <span>강남구-서초구</span>
              </UserLoca>
            </div>

            <EditButton>Edit</EditButton>
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
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
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
  }
  img {
    width: 100px;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    display: flex;
    align-items: center;
    gap: 12px;
    .img {
      width: 50px;
      height: 50px;
    }
    img {
      width: 50px;
    }
  }
`;

const UserName = styled.div`
  margin: 15px 0 6px 0;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin: 0 0 3px 0;
  }
`;
const UserLoca = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-bottom: 0;
    font-size: 12px;
  }
`;

const EditButton = styled.span`
  font-size: 12px;
  border-radius: 50px;
  border: 1px solid #4da772;
  color: #4da772;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    background-color: #4da772;
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
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
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
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 1.5vw 2vw;
    font-size: 13px;
  }
`;

export default Sidbar;
