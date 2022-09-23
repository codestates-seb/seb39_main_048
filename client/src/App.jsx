import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/header/Nav";
import Listpage from "./pages/Listpage";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import PlaceRegistration from "./pages/PlaceRegistration";
import Detailpage from "./pages/Detailpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<Listpage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<PlaceRegistration />} />
          <Route path="/detail" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
