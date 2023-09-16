import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookmark, setBookmark, setUser } from '../redux/userSlice';

const ImageDesign = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const ImageFrame = styled.img`
  width: 30.7rem;
  height: 15rem;
  margin: 0.5rem;
`;

const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export default function VideoDetail({ thumb, videoId, openModal }) {
  const link = thumb;
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const userInfo = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const imgRef = useRef(null);

  useEffect(() => {
    const asyncFunction = async () => {
      const data = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/video/bookmark?page=1&size=30`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        }
      );
      dispatch(setBookmark({ data: data.data.data }));
    };
    if (thumb) imgRef.current.src = thumb.replace('default.jpg', '0.jpg');
    if (userInfo.accessToken) asyncFunction();
  }, []);

  useEffect(() => {
    const filterd = userInfo.bookmark.filter((el) => {
      return el.videoId === videoId;
    }).length;
    if (filterd > 0) {
      setBookmarkClick(true);
    }
  }, [userInfo, videoId]);

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
      dispatch(setBookmark({ data: [videoId] }));
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
      dispatch(deleteBookmark({ videoId }));
    }
  };

  return (
    <IframeContainer>
      <ImageFrame
        src={link}
        alt='video'
        ref={imgRef}
        onClick={() => openModal(videoId)}
      ></ImageFrame>
      {bookmarkClick ? (
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
      )}
    </IframeContainer>
  );
}
