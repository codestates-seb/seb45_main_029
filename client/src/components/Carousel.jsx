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
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setUser } from '../redux/userSlice';
import { typeChecker } from '../assets/variousFunctions';

const DivFlexMovie1 = styled.div`
  display: flex;
`;

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

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
  videoIds,
  setVideoIds,
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
  const dispatch = useDispatch();

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
    const info = JSON.parse(window.localStorage.getItem('info'));
    if (info) dispatch(setUser(info));
  }, []);

  useEffect(() => {
    const asyncFunction = async () => {
      const type = await typeChecker(
        bookmark,
        message,
        videoType,
        videoDetailType,
        videoDetailType2,
        changedDetail2,
        userInfo
      );
      try {
        const { data } = await axios.get(`${SERVER_URL}/video/${type}`, {
          headers: {
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
    changedDetail2,
    userInfo.accessToken,
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
    const filterArr = userInfo.bookmark.map((el) => el.videoId);
    if (bookmark && message !== '나의 운동') {
      // 주의! 객체의 배열이므로, 뽑아써야함
      setVideos((prev) =>
        prev.filter((el) => {
          return filterArr.includes(el.videoId);
        })
      );
    }
  }, [userInfo.bookmark, bookmark]);

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
      </VideoTitle>
      <ButtonContainerOuter>
        <ButtonContainer>
          <Button onClick={PrevSlide}>&larr;</Button>
        </ButtonContainer>
        {flexWrap ? (
          <VideoAndButtonContainerFlexWrap>
            <VideoContainerFlexWrap ref={slideRef}>
              <DivFlexMovie1>
                {upperVideos.length > 0 ? (
                  upperVideos.map((elem, index) => {
                    return (
                      <div key={index}>
                        <VideoDetail
                          thumb={elem.thumbnail}
                          videoId={elem.videoId}
                          openModal={openModal}
                          bookmark={bookmark}
                          videoIds={videoIds}
                          setideoIds={setVideoIds}
                          videoTitle={elem.title}
                        />
                      </div>
                    );
                  })
                ) : (
                  <> 영상이 없습니다. 죄송해요 ㅠㅠ</>
                )}
              </DivFlexMovie1>
              <DivFlexMovie1>
                {lowerVideos.length > 0 ? (
                  lowerVideos.map((elem, index) => {
                    return (
                      <div key={index}>
                        <VideoDetail
                          thumb={elem.thumbnail}
                          videoId={elem.videoId}
                          openModal={openModal}
                          bookmark={bookmark}
                          videoIds={videoIds}
                          setVideoIds={setVideoIds}
                          videoTitle={elem.title}
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </DivFlexMovie1>
            </VideoContainerFlexWrap>
          </VideoAndButtonContainerFlexWrap>
        ) : (
          <VideoAndButtonContainer>
            <VideoContainer ref={slideRef}>
              {bookmark &&
              message === '나의 운동' &&
              userInfo.bookmark.length > 0 ? (
                userInfo.bookmark.map((elem) => {
                  return (
                    <div key={elem.videoId}>
                      <VideoDetail
                        thumb={elem.thumb}
                        videoId={elem.videoId}
                        openModal={openModal}
                        bookmark={bookmark}
                        setVideoIds={setVideoIds}
                        videoIds={videoIds}
                        videoTitle={elem.videoTitle}
                      />
                    </div>
                  );
                }) // 인덱스로 하지말자! @todo : index key로 해놓은 코드들 다 고치기!!!
              ) : videos.length > 0 ? (
                videos.map((elem) => {
                  return (
                    <div key={elem.videoId}>
                      <VideoDetail
                        thumb={elem.thumbnail}
                        videoId={elem.videoId}
                        openModal={openModal}
                        bookmark={bookmark}
                        videoIds={videoIds}
                        setVideoIds={setVideoIds}
                        videoTitle={elem.title}
                      />
                    </div>
                  );
                })
              ) : (
                <>영상이 없습니다. 죄송해요 ㅠㅠ</>
              )}
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
