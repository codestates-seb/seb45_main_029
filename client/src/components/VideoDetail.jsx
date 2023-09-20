import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookmark, plusBookmark, setUser } from '../redux/userSlice';

const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  .video-box {
    width: 350px;
    height: 100%;
    aspect-ratio: 16 / 9;
  }

  .text-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 12.5rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;
const ImageDesign = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

const ImageFrame = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const ModalContainer = styled.div`
  width: 200px;
  z-index: 50;
  position: relative;
`;

const ModalDiv = styled.div`
  width: 200px;
  z-index: 50;
  position: absolute;
  background-color: blue;
  color: red;
`;

export default function VideoDetail({
  thumb,
  videoId,
  openModal,
  videoIds,
  setVideoIds,
  videoTitle,
}) {
  const link = thumb;
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const imgRef = useRef(null);

  useEffect(() => {
    if (videoIds.findIndex((el) => el === videoId) !== -1) {
      setBookmarkClick(true);
    } else {
      setBookmarkClick(false);
    }
    if (thumb) imgRef.current.src = thumb.replace('default.jpg', '0.jpg');
  }, [videoIds, videoId, thumb]);

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem('info'));
    if (info) dispatch(setUser(info));
  }, [dispatch]);

  const imgOnclickHandler = async () => {
    const newBookmarkState = !bookmarkClick;
    setBookmarkClick(newBookmarkState);

    if (!userInfo.accessToken) {
      return;
    }
    setIsModal(true);
    setTimeout(() => setIsModal((prev) => false), 2000);
    if (newBookmarkState) {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/video/bookmark/${videoId}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        }
      );
      setVideoIds && setVideoIds([...videoIds, videoId]);
      dispatch(plusBookmark({ videoId, thumb }));
    } else {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/video/bookmark/${videoId}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        }
      );
      setVideoIds(videoIds.filter((el) => el !== videoId));
      dispatch(deleteBookmark({ videoId, thumb }));
    }
  };

  return (
    <>
      <ModalContainer>
        <ModalDiv>
          {isModal ? (
            bookmarkClick ? (
              '북마크에 추가되었습니다'
            ) : (
              '북마크에서 삭제되었습니다.'
            )
          ) : (
            <></>
          )}
        </ModalDiv>
      </ModalContainer>
      <IframeContainer>
        <article className='video-box'>
          <ImageFrame
            src={link}
            alt='video'
            ref={imgRef}
            onClick={() => openModal(videoId)}
          ></ImageFrame>
        </article>
        <div className='text-box'>
          <p>{videoTitle}</p>
          {userInfo.loggedIn &&
            (bookmarkClick ? (
              <ImageDesign
                onClick={imgOnclickHandler}
                src='/images/starFill.png'
                alt='star'
              />
            ) : (
              <ImageDesign
                onClick={imgOnclickHandler}
                src='/images/star.png'
                alt='star'
              />
            ))}
        </div>
        {}
      </IframeContainer>
    </>
  );
}
