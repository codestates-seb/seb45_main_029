import {
  typeOfVideo,
  checkBoxListBody,
  checkBoxListJob,
} from '../assets/constantValues';
import {
  NavAndContent,
  UserInfoOuterContainer,
  InfoContainer,
  UserImg,
  UserInfoPContainer,
  UserBold,
  UserHealthContainer,
  BoardCotainer,
  QuestionBoardContainer,
  TitleFontSpanPink,
  TitleFontSpanBlue,
} from '../style/MyPage';
import MyPageNav from '../components/MyPageNav';
import Carousel from '../components/Carousel';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookmark, setUser } from '../redux/userSlice';
import ToggleContainer from '../components/ToggleContainer';

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
  const [videoType, setVideoType] = useState('전체');
  const [videoDetailType, setVideoDetailType] = useState('전체');
  const [videoDetailType2, setVideoDetailType2] = useState('전체');
  const [changedDetail2, setChangedDetail2] = useState('');

  const slideRef = useRef(null);
  const slideRefBody = useRef(null);
  const slideRefJob = useRef(null);
  const userInfoRedux = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    setVideoType(e.target.innerText);
  };

  const onClickHandlerDetail = (e) => {
    const data = e.target.innerText;
    setVideoDetailType(data);
  };

  const onClickHandlerDetail2 = (e) => {
    const data = e.target.innerText;
    if (
      data === '경영_사무' ||
      data === '연구_기술' ||
      data === '예술_디자인·방송' ||
      data === '미용_여행·음식' ||
      data === '영업_판매·운송'
    )
      setChangedDetail2('사무직');
    else if (data === '보건_의료직') {
      setChangedDetail2('사무직 및 현장직');
    } else {
      setChangedDetail2('현장직');
    }
    setVideoDetailType2(e.target.innerText);
  };
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
            return {
              videoId: el.videoId,
              thumb: el.thumbnail,
              videoTitle: el.title,
            };
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
          <section className='content_pd container_wt'>
            <MyPageNav color='first' />
            <div className='content_section'>
              <section className='info_section'>
                <h2>
                  나의 <TitleFontSpanPink>정보</TitleFontSpanPink>
                </h2>
                <UserInfoOuterContainer>
                  <InfoContainer>
                    <figure>
                      <UserImg
                        src={img ? img : '/images/person.jpg'}
                        alt='myImage'
                      />
                    </figure>
                    <UserInfoPContainer>
                      <div>
                        <p>
                          <UserBold>Email :</UserBold> {userInfo.email}
                        </p>
                        <p>
                          <UserBold>Nickname :</UserBold> {userInfo.nickname}
                        </p>
                      </div>
                      <p>
                        <UserBold>직업군 :</UserBold> {userInfo.job}
                      </p>
                      <p>
                        <UserBold>Motto :</UserBold> {userInfo.motto}
                      </p>
                    </UserInfoPContainer>
                  </InfoContainer>
                  <UserHealthContainer>
                    <h3>나의 통증 부위</h3>
                    <p>{userInfo.painArea}</p>
                  </UserHealthContainer>
                </UserInfoOuterContainer>
              </section>
              <section className='bookmark_section'>
                <h2>
                  나의 <TitleFontSpanBlue>영상</TitleFontSpanBlue>
                </h2>
                {userInfoRedux.bookmark.length ? (
                  <>
                    <h2 className='title'>
                      <span>{videoType}</span> 운동 확인하기
                    </h2>
                    <ToggleContainer
                      typeOfVideo={typeOfVideo}
                      videoType={videoType}
                      onClickHandler={onClickHandler}
                    />
                    <Carousel
                      message='나의 운동'
                      slideRef={slideRef}
                      setCurrentSlide={setCurrentSlide}
                      currentSlide={currentSlide}
                      bookmark={true}
                      videoIds={videoIds}
                      setVideoIds={setVideoIds}
                    />
                    {videoType === '부위별' ? (
                      <ToggleContainer
                        typeOfVideo={checkBoxListBody}
                        videoType={videoDetailType}
                        onClickHandler={onClickHandlerDetail}
                      />
                    ) : (
                      <></>
                    )}
                    <Carousel
                      message='부위별'
                      slideRef={slideRefBody}
                      setCurrentSlide={setCurrentSlideBody}
                      currentSlide={currentSlideBody}
                      bookmark={true}
                      videoIds={videoIds}
                      videoDetailType={videoDetailType}
                      videoDetailType2={videoDetailType2}
                      setVideoIds={setVideoIds}
                    />
                    {videoType === '직업별' ? (
                      <ToggleContainer
                        typeOfVideo={checkBoxListJob}
                        videoType={videoDetailType2}
                        onClickHandler={onClickHandlerDetail2}
                      />
                    ) : (
                      <></>
                    )}
                    <Carousel
                      message='직업별'
                      slideRef={slideRefJob}
                      setCurrentSlide={setCurrentSlideJob}
                      currentSlide={currentSlideJob}
                      bookmark={true}
                      videoIds={videoIds}
                      videoDetailType={videoDetailType}
                      videoDetailType2={videoDetailType2}
                      setVideoIds={setVideoIds}
                      changedDetail2={changedDetail2}
                    />
                  </>
                ) : (
                  <p className='no_bookmark'>북마크를 추가해주세요</p>
                )}
              </section>
              <section className='qna_section'>
                <h2>질문 답변</h2>
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
              </section>
            </div>
          </section>
        </NavAndContent>
      )}
    </>
  );
}
