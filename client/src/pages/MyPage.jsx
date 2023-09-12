import {
  NavAndContent,
  NavContainer,
  UserInfoOuterContainer,
  InfoContainer,
  UserImg,
  UserInfoPContainer,
  UserInfoP,
  UserHealthContainer,
  Line,
  BoardCotainer,
  QuestionBoardContainer,
  TitleFontSpanPink,
  TitleFontSpanBlack,
  UserSpan,
} from '../style/MyPage';
import MyPageNav from '../components/MyPageNav';
import Carousel from '../components/Carousel';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function MyPage() {
  const { userId, image } = useSelector((state) => state.user);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideJob, setCurrentSlideJob] = useState(0);
  const [currentSlideBody, setCurrentSlideBody] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const slideRef = useRef(null);
  const slideRefBody = useRef(null);
  const slideRefJob = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${SERVER_URL}/${userId}`);
      setUserInfo(data.data);
    };
    getData();
  }, []);

  return (
    <NavAndContent>
      <NavContainer>
        <MyPageNav color='first' />
      </NavContainer>
      <div>
        <UserInfoOuterContainer>
          <InfoContainer>
            <header>
              <div>
                <span>나의</span> <TitleFontSpanPink>정보</TitleFontSpanPink>
              </div>
              <UserImg
                src={image === '' ? '/images/person.jpg' : image}
                alt='myImage'
              />
            </header>
            <UserInfoPContainer>
              <UserSpan>Email : {userInfo.email}</UserSpan>
              <UserSpan>nickname : {userInfo.nickname}</UserSpan>
              <UserInfoP>직업군 : {userInfo.job}</UserInfoP>
              <UserInfoP>motto : {userInfo.motto}</UserInfoP>
            </UserInfoPContainer>
          </InfoContainer>
          <UserHealthContainer>
            <p>나의 통증 부위 : {userInfo.painArea}</p>
            <Line></Line>
          </UserHealthContainer>
        </UserInfoOuterContainer>
        <Carousel
          message='나의 운동'
          slideRef={slideRef}
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
          bookmark={true}
        />
        <Carousel
          message='부위별'
          slideRef={slideRefBody}
          setCurrentSlide={setCurrentSlideBody}
          currentSlide={currentSlideBody}
          bookmark={true}
        />
        <Carousel
          message='직업별'
          slideRef={slideRefJob}
          setCurrentSlide={setCurrentSlideJob}
          currentSlide={currentSlideJob}
          bookmark={true}
        />
        <hr></hr>
        <TitleFontSpanBlack>질문 답변</TitleFontSpanBlack>
        <BoardCotainer>
          <QuestionBoardContainer>내가 한 질문</QuestionBoardContainer>
          {userInfo.questions?.map((el) => {
            return el;
          })}
          <div>내가 한 답변</div>
          {userInfo.answers?.map((el) => {
            return el;
          })}
        </BoardCotainer>
      </div>
    </NavAndContent>
  );
}
