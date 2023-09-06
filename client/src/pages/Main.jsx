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

function Main() {
  const [videoType, setVideoType] = useState('전체');
  const [videoDetailType, setVideoDetailType] = useState('가슴');
  const [videoDetailType2, setVideoDetailType2] = useState('경영·사무');
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    setVideoType(e.target.innerText);
  };

  const onClickHandlerDetail = (e) => {
    setVideoDetailType(e.target.innerText);
  };

  const onClickHandlerDetail2 = (e) => {
    setVideoDetailType2(e.target.innerText);
  };

  const onClickSearchHandler = (e) => {
    const content = e.target.previousSibling.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    console.log(e.target.previousSibling.value); // 값 얻어올 수 있음
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

      <p>로그인하여 여러분들만의 </p>
      <p>맞춤 운동 동영상을 확인해보세요</p>
      <h1>TOP5 재활운동</h1>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/xIx9wBI9il0?si=ygq9e4zRxY3SnzXJ'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>

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

      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/xIx9wBI9il0?si=ygq9e4zRxY3SnzXJ'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </MainContainer>
  );
}
export default Main;
