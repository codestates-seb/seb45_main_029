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
import styled from 'styled-components';

const DivFlexMovie1 = styled.div`
  display: flex;
`;

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const typeChecker = (
  bookmark,
  message,
  videoType,
  videoDetailType,
  changedDetail2
) => {
  let type = '';
  if (bookmark) {
    type = 'bookmark/?page=1&size=30';
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
    type = `keyword?page=1&size=30&keyword=${changedDetail2}`;
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
  changedDetail2,
}) {
  // flexWrap은 Main페이지 아래부분의 비디오 flex-wrap CSS를 구현하기 위한 props
  const [videos, setVideos] = useState([]);
  const [upperVideos, setUpperVideos] = useState([]);
  const [lowerVideos, setLowerVideos] = useState([]);
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
        changedDetail2
      );
      try {
        const { data } = await axios.get(`${SERVER_URL}/video/${type}`, {
          headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userInfo.accessToken}` || '',
          },
        });
        setVideos(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    asyncFunction();
  }, [
    videoType,
    videoDetailType,
    videoDetailType2,
    message,
    bookmark,
    userInfo,
    changedDetail2,
  ]);

  useEffect(() => {
    setLowerVideos(
      videos.filter((el, idx) => {
        return idx % 2 === 0;
      })
    );
    setUpperVideos(
      videos.filter((el, idx) => {
        return idx % 2 === 1;
      })
    );
  }, [videos]);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(${-currentSlide}00%)`;
  }, [currentSlide, slideRef]);

  useEffect(() => {
    const upper =
      videos.length % 3 === 0 ? videos.length / 3 - 1 : videos.length / 3;
    const lower =
      videos.length % 6 === 0 ? videos.length / 6 - 1 : videos.length / 6;
    const TOTAL_SLIDES = flexWrap ? parseInt(lower) : parseInt(upper);

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
              <DivFlexMovie1>
                {upperVideos.map((elem, index) => {
                  return (
                    <div key={index}>
                      <VideoDetail
                        thumb={elem.thumbnail}
                        videoId={elem.videoId}
                        openModal={openModal}
                      />
                    </div>
                  );
                })}
              </DivFlexMovie1>
              <DivFlexMovie1>
                <DivFlexMovie1>
                  {lowerVideos.map((elem, index) => {
                    return (
                      <div key={index}>
                        <VideoDetail
                          thumb={elem.thumbnail}
                          videoId={elem.videoId}
                          openModal={openModal}
                        />
                      </div>
                    );
                  })}
                </DivFlexMovie1>
              </DivFlexMovie1>
            </VideoContainerFlexWrap>
          </VideoAndButtonContainerFlexWrap>
        ) : (
          <VideoAndButtonContainer>
            <VideoContainer ref={slideRef}>
              {videos.map((elem, index) => {
                return (
                  <div key={index}>
                    <VideoDetail
                      thumb={elem.thumbnail}
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
