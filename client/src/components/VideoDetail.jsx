import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ImageDesign = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const ImageFrame = styled.img`
  width: 35rem;
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
  const [pic, setPic] = useState('');

  useEffect(() => {
    if (!thumb) {
      console.log(thumb);
      setPic(thumb.replace('maxresdefault.jpg', 'default.jpg'));
    } else {
      setPic(thumb);
    }
  }, []);

  const imgOnclickHandler = () => {
    setBookmarkClick(!bookmarkClick);
    if (bookmarkClick) {
      axios.post(`${import.meta.env.SERVER_URL}/video/bookmark/${videoId}`, {});
    } else {
      axios.delete(`${import.meta.env.SERVER_URL}/video/bookmark/${videoId}`);
    }
  };

  useEffect(() => {}, []);

  return (
    <IframeContainer>
      <ImageFrame
        src={pic}
        alt='watch'
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
