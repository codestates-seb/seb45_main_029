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
import { useDispatch, useSelector } from 'react-redux';
import { setBookmark, setUser } from '../redux/userSlice';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

// @todo : myPage에서 carousel에게 userInfo를 props로 전달할 것인가
export default function MyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideJob, setCurrentSlideJob] = useState(0);
  const [currentSlideBody, setCurrentSlideBody] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [login, setLogin] = useState(false);
  const [videoIds, setVideoIds] = useState([]);
  const [img, setImg] = useState('');

  const slideRef = useRef(null);
  const slideRefBody = useRef(null);
  const slideRefJob = useRef(null);
  const userInfoRedux = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunction = async () => {
      const data = await axios.get(
        `${SERVER_URL}/video/bookmark/?page=1&size=30`,
        {
          headers: {
            Authorization: `Bearer ${userInfoRedux.accessToken}` || '',
          },
        }
      );
      setVideoIds(data.data.data.map((el) => el.videoId));
      dispatch(
        setBookmark({
          data: data.data.data.map((el) => {
            return { videoId: el.videoId, thumb: el.thumbnail };
          }),
        })
      );
    };
    if (userInfoRedux.accessToken) {
      asyncFunction();
    }
  }, [userInfoRedux.accessToken]);

  useEffect(() => {
    // 새로고침 시 정보 받아오기
    const info = JSON.parse(window.localStorage.getItem('info'));
    dispatch(setUser(info));
  }, [dispatch]);

  useEffect(() => {
    // 유저 정보 가져오기
    if (userInfoRedux.loggedIn) {
      setLogin(true);
    }

    const getData = async () => {
      try {
        const data = await axios.get(
          `${SERVER_URL}/users/mypage/${userInfoRedux.userId}`,
          {
            headers: {
              Authorization: `Bearer ${userInfoRedux.accessToken}`,
            },
          }
        );
        const imgData = await axios.get(
          `${SERVER_URL}/upload/${userInfoRedux.userId}`,
          { headers: { Authorization: `Bearer ${userInfoRedux.accessToken}` } }
        );
        setImg(imgData && imgData.data.data?.imageUrl);
        setUserInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (userInfoRedux.accessToken) getData();
  }, [userInfoRedux]);

  return (
    <>
      {!login ? (
        <h2>로그인해주세요</h2>
      ) : (
        <NavAndContent>
          <NavContainer>
            <MyPageNav color='first' />
          </NavContainer>
          <div>
            <UserInfoOuterContainer>
              <InfoContainer>
                <header>
                  <div>
                    <span>나의</span>
                    <TitleFontSpanPink>정보</TitleFontSpanPink>
                  </div>
                  <UserImg
                    src={img ? img : '/images/person.jpg'}
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
            {userInfoRedux.bookmark.length ? (
              <>
                <Carousel
                  message='나의 운동'
                  slideRef={slideRef}
                  setCurrentSlide={setCurrentSlide}
                  currentSlide={currentSlide}
                  bookmark={true}
                  videoIds={videoIds}
                  setVideoIds={setVideoIds}
                />
                <Carousel
                  message='부위별'
                  slideRef={slideRefBody}
                  setCurrentSlide={setCurrentSlideBody}
                  currentSlide={currentSlideBody}
                  bookmark={true}
                  videoIds={videoIds}
                  setVideoIds={setVideoIds}
                />
                <Carousel
                  message='직업별'
                  slideRef={slideRefJob}
                  setCurrentSlide={setCurrentSlideJob}
                  currentSlide={currentSlideJob}
                  bookmark={true}
                  videoIds={videoIds}
                  setVideoIds={setVideoIds}
                />
              </>
            ) : (
              <>북마크를 추가해주세요</>
            )}

            <hr></hr>
            <TitleFontSpanBlack>질문 답변</TitleFontSpanBlack>
            <BoardCotainer>
              <QuestionBoardContainer>내가 한 질문</QuestionBoardContainer>
              {userInfo.questions?.map((el, idx) => {
                return (
                  <>
                    <span>{idx + 1}</span>
                    <span>{el.title}</span>
                    <span>{el.createdAt}</span>
                  </>
                );
              })}
              <div>내가 한 답변</div>
              {userInfo.answers?.map((el, idx) => {
                return (
                  <>
                    <span>{idx + 1}</span>
                    <span>{el.content}</span>
                    <span>{el.createdAt}</span>
                  </>
                );
              })}
            </BoardCotainer>
          </div>
        </NavAndContent>
      )}
    </>
  );
}
