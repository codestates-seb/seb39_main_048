import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import useLogin from "./store/LoginStore";
import jwt_decode from "jwt-decode";
import useMamber from "./store/MemberStore";

function App() {
  const { isLogin, setIsLogin } = useLogin();
  const { setUser } = useMamber();

  useEffect(() => {
    if (localStorage.getItem("access_Token") === null) {
      console.log("isLogin ? : 로그인 상태 아님", isLogin);
    } else {
      setIsLogin(true);
      console.log("isLogin ? : 로그인", isLogin);
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      const decoded = jwt_decode(localStorage.getItem("access_Token"));
      setUser(decoded.userId);
    }
  }, []);

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
