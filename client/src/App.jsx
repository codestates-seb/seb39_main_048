import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import "./App.css";
import Nav from "./components/header/Nav";
import Map from "./pages/Map";
import Listpage from "./pages/Listpage";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import PlaceRegistration from "./pages/PlaceRegistration";
import Signup from "./pages/Signup";
import Detailpage from "./pages/Detailpage";
import ScrollToTop from "./hooks/useLocation";

// ReactModal.setAppElement("#root");

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      // localStorage 에 userId 이라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ? : 로그인 상태 아님", isLogin);
    } else {
      // localStorage 에 userId 이라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ? : 로그인", isLogin);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Nav isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/place" element={<Listpage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/regist" element={<PlaceRegistration />} />
          <Route path="/place/:id" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
