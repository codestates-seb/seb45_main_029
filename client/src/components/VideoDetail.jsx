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
    imgRef.current.src = thumb?.replace('default.jpg', '0.jpg');
    if (userInfo.bookmark.includes(videoId)) {
      setBookmarkClick(true);
    }
  }, []);

  const imgOnclickHandler = async () => {
    const newBookmarkState = !bookmarkClick;
    setBookmarkClick(newBookmarkState);

    console.log(userInfo);

    if (newBookmarkState) {
      const data = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/video/bookmark/${videoId}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        }
      );
      dispatch(setBookmark(videoId));
    } else {
      const data = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/video/bookmark/${videoId}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        }
      );
      dispatch(deleteBookmark(videoId));
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
