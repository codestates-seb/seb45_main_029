// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
// import BoardPage from './pages/BoardPage';
import SignUp from "./pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          {/* <Route path='/boardpage' element={<BoardPage />} /> */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
