import { useState } from 'react';
import {
  MainContainer,
  InputContainer,
  InputDesign,
  ImageDesign,
} from '../style/Main';
import ToggleContainer from '../components/ToggleContainer';
import {
  typeOfVideo,
  checkBoxListBody,
  checkBoxListJob,
} from '../assets/constantValues';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

function Main() {
  const [videoType, setVideoType] = useState('전체');
  const [videoDetailType, setVideoDetailType] = useState('가슴');
  const [videoDetailType2, setVideoDetailType2] = useState('경영·사무');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTop5, setCurrentSlideTop5] = useState(0);
  const [currentSlideRecommend, setCurrentSlideRecommend] = useState(0);

  const userInfo = useSelector((state) => state.user);
  const slideRef = useRef(null);
  const slideRefTop5 = useRef(null);
  const slideRefRecommend = useRef(null);

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    setVideoType(e.target.innerText);
    // 데이터 보내주기
  };

  const onClickHandlerDetail = (e) => {
    const data = e.target.innerText;
    if (data === '경영·사무' || data === '연구·기술' || data === '보건·의료직')
      setVideoDetailType('사무직');
    else {
      setVideoDetailType('현장직');
    }
  };

  const onClickHandlerDetail2 = (e) => {
    setVideoDetailType2(e.target.innerText);
  };

  const onClickSearchHandler = (e) => {
    const content = e.target.previousSibling.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    navigate('/search', { state: { value: content } }); // 검색 페이지로 이동
  };

  const onKeyUpHandler = (e) => {
    const content = e.target.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    if (e.keyCode === 13) {
      // input enter 누를 시
      navigate('/search', { state: { value: content } }); // 검색 페이지로 이동
    }
  };

  return (
    <MainContainer>
      <InputContainer>
        <InputDesign onKeyUp={onKeyUpHandler} placeholder='검색하기' />
        {/* 검색하기 */}
        <ImageDesign
          onClick={onClickSearchHandler}
          src='/images/magnify.png'
          alt='magnifier'
        />
      </InputContainer>
      {/* 로그인 시, 따로 맞춤추천영상이 떠야함, 리덕스 스토어에 저장된 isLoggedIn을 이용해서 조건부로 하면 될 거 같음 */}
      {userInfo.loggedIn === false ? (
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
        />
      )}
      <Carousel
        message='TOP5 재활운동'
        slideRef={slideRefTop5}
        setCurrentSlide={setCurrentSlideTop5}
        currentSlide={currentSlideTop5}
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
      />
    </MainContainer>
  );
}
export default Main;
