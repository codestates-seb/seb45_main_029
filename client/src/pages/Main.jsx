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

function Main() {
  const [videoType, setVideoType] = useState('전체');
  const [videoDetailType, setVideoDetailType] = useState('가슴');
  const [videoDetailType2, setVideoDetailType2] = useState('경영·사무');

  const onClickHandler = (e) => {
    setVideoType(e.target.innerText);
  };

  const onClickHandlerDetail = (e) => {
    setVideoDetailType(e.target.innerText);
  };

  const onClickHandlerDetail2 = (e) => {
    setVideoDetailType2(e.target.innerText);
  };

  return (
    <MainContainer>
      <InputContainer>
        <InputDesign placeholder='검색하기' />
        <ImageDesign src='/images/magnify.png' alt='magnifier' />
      </InputContainer>
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
