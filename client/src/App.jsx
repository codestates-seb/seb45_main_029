// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import BoardPage from './pages/BoardPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styled-components';
import Footer from './components/Footer';
import MyPageDelete from './pages/MyPageDelete';
import MyPageInfo from './pages/MyPageInfo';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/mypageDelete' element={<MyPageDelete />}></Route>
          <Route path='/mypageInfo' element={<MyPageInfo />}></Route>
          <Route path='/boardpage' element={<BoardPage />}></Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
