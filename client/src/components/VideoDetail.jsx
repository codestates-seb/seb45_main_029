import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

// @todo 서버 URI 연결
export default function VideoDetail({ thumb, videoId, openModal }) {
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const link = thumb.replace('default.jpg', 'maxresdefault.jpg');
  const imgRef = useRef(null);

  useEffect(() => {
    imgRef.current.src = '새로운 이미지 URL';
  }, []);

  const imgOnclickHandler = () => {
    setBookmarkClick(!bookmarkClick);
    if (bookmarkClick) {
      axios.post(`${import.meta.env.SERVER_URL}/video/bookmark/${videoId}`, {});
    } else {
      axios.delete(`${import.meta.env.SERVER_URL}/video/bookmark/${videoId}`);
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
