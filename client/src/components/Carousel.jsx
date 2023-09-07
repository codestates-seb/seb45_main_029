import { useEffect } from 'react';
import Slide from './Slide';
import {
  VideoTitle,
  TitleFontSpanBlack,
  ButtonContainerOuter,
  ButtonContainer,
  Button,
  VideoAndButtonContainer,
  VideoContainer,
} from '../style/MyPage';

const TOTAL_SLIDES = 4;
const VideoLinks = [
  'https://www.youtube.com/embed/0ComdmFhE4k?si=5seAdHWRKVawSpKD',
  'https://www.youtube.com/embed/0ComdmFhE4k?si=5seAdHWRKVawSpKD',
  'https://www.youtube.com/embed/0ComdmFhE4k?si=5seAdHWRKVawSpKD',
  'https://www.youtube.com/embed/GqRammbyk4M?si=Ff_mMyjPL2zu9Ez8',
  'https://www.youtube.com/embed/GqRammbyk4M?si=Ff_mMyjPL2zu9Ez8',
];

export default function Carousel({
  message,
  currentSlide,
  slideRef,
  setCurrentSlide,
}) {
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(${-5 * currentSlide}0%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
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
        <VideoAndButtonContainer>
          <VideoContainer ref={slideRef}>
            {VideoLinks.map((elem, index) => {
              return <Slide key={index} videoLink={elem} />;
            })}
          </VideoContainer>
        </VideoAndButtonContainer>
        <ButtonContainer>
          <Button onClick={NextSlide}>&rarr;</Button>
        </ButtonContainer>
      </ButtonContainerOuter>
    </>
  );
}
