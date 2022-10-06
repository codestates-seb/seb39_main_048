import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Avatar } from "../../assets/Avatar.svg";
import { ReactComponent as Hamberger } from "../../assets/Hamberger.svg";
import useDetectClose from "../../hooks/useDetectClose";
import { BREAK_POINT_PHONE } from "../../constant";
import useLogin from "../../store/LoginStore";
import toast, { Toaster } from "react-hot-toast";
import { ToastInfo } from "../../constant";

const Nav = () => {
  const [isOpen, menuRef, handleOpen] = useDetectClose(false);
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useLogin();

  const handleLogout = () => {
    console.log("here");
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("access_Token");
      setIsLogin(false);
      navigate("/");
    }
  };

  const handleMap = () => {
    return toast("미구현 기능입니다.", { icon: "🥲", ...ToastInfo });
  };

  return (
    <>
      <NavBar>
        <Inner>
          <Link to="/">
            <img src={Logo}></img>
          </Link>

          {isLogin ? (
            <MenuIcons onClick={handleOpen} ref={menuRef}>
              <Avatar />
              <Hamberger />
            </MenuIcons>
          ) : (
            <MenuIcons onClick={handleOpen} ref={menuRef}>
              <Hamberger />
            </MenuIcons>
          )}
        </Inner>
      </NavBar>
      {isOpen && isLogin ? (
        <MenuGroup>
          <Link to="/mypage">
            <div className="item border">마이페이지</div>
          </Link>

          <div className="menu">장소 탐색</div>

          <div className="item place" onClick={handleMap}>
            지도로 찾기
          </div>

          <Link to="/place">
            <div className="item border">목록으로 찾기</div>
          </Link>
          <Link to="/regist">
            <div className="item border">장소 등록하기</div>
          </Link>
          <div className="item" onClick={handleLogout}>
            로그아웃
          </div>
        </MenuGroup>
      ) : (
        ""
      )}
      {!isLogin && isOpen ? (
        <MenuGroup>
          <Link to="/login">
            <div className="item first">로그인</div>
          </Link>
          <Link to="/signup">
            <div className="item border">회원가입</div>
          </Link>
          <div className="menu">장소 탐색</div>
          <div className="item place" onClick={handleMap}>
            지도로 찾기
          </div>
          <Link to="/place">
            <div className="item">목록으로 찾기</div>
          </Link>
        </MenuGroup>
      ) : (
        ""
      )}
      <Toaster />
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
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    height: 50px;
    box-shadow: none;
  }
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
    transition: all 0.3s;
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 0 5vw;
    img {
      width: 50px;
      height: 22px;
    }
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
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 6px 10px;
  }
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
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    top: 50px;
    right: 5vw;
  }

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
    transition: all 0.1s ease-in-out;
    &:hover {
      color: #4da772;
    }
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
