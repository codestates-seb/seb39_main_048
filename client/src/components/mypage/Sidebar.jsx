import React, { useState } from "react";
import styled from "styled-components";
import User from "../../assets/User.png";
import { ReactComponent as Location } from "../../assets/Location.svg";
import useMypag from "../../store/Store";

const Sidbar = () => {
  const { setMenu } = useMypag();
  const myMenus = [
    "마이페이지",
    "북마크",
    "내가 등록한 장소",
    "내가 작성한 후기",
  ];
  const [currentActive, setCurrentActive] = useState("마이페이지");

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
            <UserName>kanghyew0n</UserName>
            <UserLoca>
              <Location />
              <span>강남구-서초구</span>
            </UserLoca>
            <EditButton>Edit</EditButton>
          </UserInfo>
          <MyMenu>
            {myMenus.map((menu, idx) => (
              <div
                className={
                  currentActive === menu ? "menu active" : "menu"
                }
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
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #333;
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
`;

const UserName = styled.div`
  margin: 15px 0 6px 0;
`;
const UserLoca = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const EditButton = styled.span`
  font-size: 12px;
  border-radius: 50px;
  border: 1px solid #4da772;
  color: #4da772;
  padding: 5px 15px;
  cursor: pointer;
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
`;

const Menu = styled.li`
  padding: 1vw 1.5vw;
`;

export default Sidbar;
