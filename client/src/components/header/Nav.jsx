import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ReactComponent as Avatar } from "../../assets/Avatar.svg";
import { ReactComponent as Hamberger } from "../../assets/Hamberger.svg";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("here");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar>
        <Inner>
        <Link to="/"> <img src={Logo}></img></Link>
         
          {isLogin ? (
            <MenuIcons onClick={handleOpen}>
              <Avatar />
              <Hamberger />
            </MenuIcons>
          ) : (
            <MenuIcons onClick={handleOpen}>
              <Hamberger />
            </MenuIcons>
          )}
        </Inner>
      </NavBar>
      {isOpen && isLogin ? (
        <MenuGroup>
          <div className="item border">마이페이지</div>
          <div className="menu">장소 탐색</div>
          <div className="item place">지도로 찾기</div>
          <Link to="/list">
            <div className="item border">목록으로 찾기</div>
          </Link>

          <div className="item border">장소 등록하기</div>
          <div className="item">로그아웃</div>
        </MenuGroup>
      ) : (
        ""
      )}
      {!isLogin && isOpen ? (
        <MenuGroup>
          <div className="item first">로그인</div>
          <div className="item border">회원가입</div>
          <div className="menu">장소 탐색</div>
          <div className="item place">지도로 찾기</div>
          <div className="item">목록으로 찾기</div>
        </MenuGroup>
      ) : (
        ""
      )}
    </>
  );
};

const NavBar = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 300;
  position: fixed;
`;

const Inner = styled.div`
  /* max-width: 1280px; */
  padding: 0 10vw;
  /* width: 80vw; */
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 83px;
    height: 36px;
  }
`;

const MenuIcons = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 12px;
  border: 1px solid #d7e2eb;
  border-radius: 50px;
  cursor: pointer;
`;

const MenuGroup = styled.div`
  position: absolute;
  position: fixed;
  width: 200px;
  top: 85px;
  right: 10vw;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 20px;
  padding: 15px 30px;
  color: #333;
  font-size: 15px;
  z-index: 400;

  div {
    cursor: pointer;
  }

  .menu {
    padding: 20px 10px 0px 0;
    color: #999;
    font-size: 12px;
    cursor: default;
  }

  .item {
    padding: 15px 0;
  }

  .border {
    border-bottom: 1px solid #d7e2eb;
  }

  .place {
    padding: 10px 10px 0 0;
  }

  .first {
    padding: 15px 0 0 0;
  }
`;

export default Nav;