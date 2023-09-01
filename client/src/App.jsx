// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Main from './Pages/Main';
import MyPage from './Pages/MyPage';
import BoardPage from './Pages/BoardPage';
import SignUp from './Pages/SignUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from 'styled-components'


function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/boardpage' element={<BoardPage />} />
          <Route path='/signup' element={<SignUp />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
