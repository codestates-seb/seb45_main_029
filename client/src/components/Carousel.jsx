import { useEffect, useState } from 'react';
import VideoDetail from './VideoDetail';
import {
  VideoTitle,
  TitleFontSpanBlack,
  ButtonContainerOuter,
  ButtonContainer,
  Button,
  VideoAndButtonContainer,
  VideoContainer,
  VideoAndButtonContainerFlexWrap,
  VideoContainerFlexWrap,
} from '../style/MyPage';
import axios from 'axios';
// @todo : 비디오 받아온 후에 지우기

export default function Carousel({
  message,
  currentSlide,
  slideRef,
  setCurrentSlide,
  flexWrap,
}) {
  // flexWrap은 Main페이지 아래부분의 비디오 flex-wrap CSS를 구현하기 위한 props
  const [videos, setVideos] = useState([]);

  const TOTAL_SLIDES = flexWrap
    ? parseInt(videos.length / 6) - 1
    : parseInt(videos.length / 3) - 1;

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // @todo : .서버 연결
  useEffect(() => {
    const asyncFunction = async () => {
      let type = '';
      if (message === 'TOP5 재활운동') {
        type = 'popular';
      } else if (message === '직업별') {
        type = 'job';
      }
      const { data } = await axios.get(
        `http://localhost:8080/video/${type}?page=1&size=10`
      );
      setVideos(data);
    };
    asyncFunction();
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(${-currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <VideoTitle>
        <TitleFontSpanBlack>{message}</TitleFontSpanBlack>
        <hr></hr>
      </VideoTitle>
      <ButtonContainerOuter>
        <ButtonContainer>
          <Button onClick={PrevSlide}>&larr;</Button>
        </ButtonContainer>
        {flexWrap ? (
          <VideoAndButtonContainerFlexWrap>
            <VideoContainerFlexWrap ref={slideRef}>
              {videos.map((elem, index) => {
                return (
                  <VideoDetail
                    key={index}
                    youtubeLink={elem}
                    videoId={elem.videoId}
                  />
                );
              })}
            </VideoContainerFlexWrap>
          </VideoAndButtonContainerFlexWrap>
        ) : (
          <VideoAndButtonContainer>
            <VideoContainer ref={slideRef}>
              {videos.map((elem, index) => {
                return (
                  <VideoDetail
                    key={index}
                    youtubeLink={elem}
                    videoId={elem.videoId}
                  />
                );
              })}
            </VideoContainer>
          </VideoAndButtonContainer>
        )}
        <ButtonContainer>
          <Button onClick={NextSlide}>&rarr;</Button>
        </ButtonContainer>
      </ButtonContainerOuter>
    </>
  );
}
