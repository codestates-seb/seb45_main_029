import { useEffect, useState } from 'react';
import {
  MainContainer,
  InputContainer,
  InputDesign,
  ImageDesign,
} from '../style/Main';
import ToggleContainer from '../components/ToggleContainer';
import axios from 'axios';
import {
  typeOfVideo,
  checkBoxListBody,
  checkBoxListJob,
} from '../assets/constantValues';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookmark } from '../redux/userSlice';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function Main() {
  const [videoType, setVideoType] = useState('전체');
  const [videoDetailType, setVideoDetailType] = useState('가슴');
  const [videoDetailType2, setVideoDetailType2] = useState('경영·사무');
  const [changedDetail2, setChangedDetail2] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTop5, setCurrentSlideTop5] = useState(0);
  const [currentSlideRecommend, setCurrentSlideRecommend] = useState(0);
  const [login, setLogin] = useState(false);
  const [videoIds, setVideoIds] = useState([]);

  const userInfo = useSelector((state) => state.user);

  const slideRef = useRef(null);
  const slideRefTop5 = useRef(null);
  const slideRefRecommend = useRef(null);
  const info = JSON.parse(window.localStorage.getItem('info'));

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      data === '경영·사무' ||
      data === '연구·기술' ||
      data === '예술·디자인·방송' ||
      data === '미용·여행·음식' ||
      data === '영업·판매·운송'
    )
      setChangedDetail2('사무직');
    else if (data === '보건·의료직') {
      setChangedDetail2('사무직 및 현장직');
    } else {
      setChangedDetail2('현장직');
    }
    setVideoDetailType2(e.target.innerText);
  };

  const onClickSearchHandler = (e) => {
    const content = e.target.previousSibling.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    navigate('/search', { state: { value: content } });
  };

  const onKeyUpHandler = (e) => {
    const content = e.target.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    if (e.keyCode === 13) {
      navigate('/search', { state: { value: content } });
    }
  };

  useEffect(() => {
    if (userInfo.loggedIn || info) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [userInfo, info]);

  useEffect(() => {
    // 첫 렌더링시 북마크 목록 가져오기
    const getData = async () => {
      try {
        const data = await axios.get(
          `${SERVER_URL}/video/bookmark/?page=1&size=30`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.accessToken}`,
            },
          }
        );
        dispatch(setBookmark({ data: data.data.data.map((el) => el.videoId) }));
        setVideoIds(data.data.data.map((el) => el.videoId));
      } catch (error) {
        console.log(error);
      }
    };

    if (userInfo.accessToken) getData();
  }, [userInfo.accessToken]);

  return (
    <MainContainer>
      <InputContainer>
        <InputDesign onKeyUp={onKeyUpHandler} placeholder='검색하기' />
        <ImageDesign
          onClick={onClickSearchHandler}
          src='/images/magnify.png'
          alt='magnifier'
        />
      </InputContainer>
      {login === false ? (
        <>
          <p>로그인하여 여러분들만의 </p>
          <p>맞춤 운동 동영상을 확인해보세요</p>
        </>
      ) : (
        <Carousel
          message='My 맞춤운동'
          slideRef={slideRefRecommend}
          setCurrentSlide={setCurrentSlideRecommend}
          currentSlide={currentSlideRecommend}
          bookmark={false}
          videoIds={videoIds}
          setVideoIds={setVideoIds}
        />
      )}
      <Carousel
        message='TOP5 재활운동'
        slideRef={slideRefTop5}
        setCurrentSlide={setCurrentSlideTop5}
        currentSlide={currentSlideTop5}
        bookmark={false}
        videoIds={videoIds}
        setVideoIds={setVideoIds}
      />
      <p>{videoType} 운동 확인하기</p>
      <ToggleContainer
        typeOfVideo={typeOfVideo}
        videoType={videoType}
        onClickHandler={onClickHandler}
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
        flexWrap={true}
        message=''
        slideRef={slideRef}
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
        videoType={videoType}
        videoDetailType={videoDetailType}
        videoDetailType2={videoDetailType2}
        bookmark={false}
        changedDetail2={changedDetail2}
        videoIds={videoIds}
        setVideoIds={setVideoIds}
      />
    </MainContainer>
  );
}
export default Main;
