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
import Modal from './Modal';
import { useSelector } from 'react-redux';
import { jobChoose } from '../assets/variousFunctions';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const typeChecker = (
  bookmark,
  message,
  videoType,
  videoDetailType,
  videoDetailType2,
  userInfo
) => {
  let type = '';
  if (bookmark) {
    type = 'bookmark/?page=1&size=30';
    jobChoose(userInfo.job, null);
  }
  if (message === 'TOP5 재활운동') {
    type = 'popular?page=1&size=10';
  } else if (message === '직업별') {
    type = 'job?page=1&size=10';
  } else if (message === 'My 맞춤운동') {
    type = 'recommended?page=1&size=10';
  }
  if (videoType === '전체') {
    type = `keyword?page=1&size=30&keyword=`;
  } else if (videoType === '부위별') {
    type = `keyword?page=1&size=30&keyword=${videoDetailType}`;
  } else if (videoType === '직업별') {
    type = `keyword?page=1&size=30&keyword=${videoDetailType2}`;
  }
  return type;
};

export default function Carousel({
  message,
  currentSlide,
  slideRef,
  setCurrentSlide,
  flexWrap,
  videoType,
  videoDetailType,
  videoDetailType2,
  bookmark,
}) {
  // flexWrap은 Main페이지 아래부분의 비디오 flex-wrap CSS를 구현하기 위한 props
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const userInfo = useSelector((state) => state.user);

  const openModal = (index) => {
    setModalOpen(true);
    setListIndex(index);
  };

  const NextSlide = () => {
    if (currentSlide >= total) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(total);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const asyncFunction = async () => {
      const type = typeChecker(
        bookmark,
        message,
        videoType,
        videoDetailType,
        videoDetailType2,
        userInfo
      );

      const { data } = await axios.get(`${SERVER_URL}/video/${type}`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '69420',
        },
      });

      setVideos(data.data);
    };
    asyncFunction();
  }, [
    videoType,
    videoDetailType,
    videoDetailType2,
    message,
    bookmark,
    userInfo,
  ]);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(${-currentSlide}00%)`;
  }, [currentSlide, slideRef]);

  useEffect(() => {
    const TOTAL_SLIDES = flexWrap
      ? parseInt(videos.length / 6)
      : parseInt(videos.length / 3);
    setTotal(TOTAL_SLIDES);
  }, [videos, flexWrap]);

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        list={videos}
        listIndex={listIndex}
        videoId={true}
      />
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
                  <div key={index}>
                    <VideoDetail
                      thumb={elem.thumbnail.replace(
                        'default.jpg',
                        'maxresdefault.jpg'
                      )}
                      videoId={elem.videoId}
                      openModal={openModal}
                    />
                  </div>
                );
              })}
            </VideoContainerFlexWrap>
          </VideoAndButtonContainerFlexWrap>
        ) : (
          <VideoAndButtonContainer>
            <VideoContainer ref={slideRef}>
              {videos.map((elem, index) => {
                return (
                  <div key={index}>
                    <VideoDetail
                      thumb={elem.thumbnail.replace(
                        'default.jpg',
                        'maxresdefault.jpg'
                      )}
                      videoId={elem.videoId}
                      openModal={openModal}
                    />
                  </div>
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
