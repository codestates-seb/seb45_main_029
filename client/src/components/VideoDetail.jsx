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

export default function VideoDetail({ thumb, videoId, openModal }) {
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const link = thumb;
  const imgRef = useRef(null);

  // @todo : 원하는 이미지가 없을 경우, 이전 해상도를 제공한다. hqdefault를 시도해볼 수도 있음 ( 고품질이기는 한데, 과연 유저경험이 어떨지는 지켜봐야 )
  useEffect(() => {
    try {
      imgRef.current.src = thumb.replace('default.jpg', 'maxresdefault.jpg'); // 만약 img src를 바꿨을 때, 404 에러를 잡아낼 수 있다면
    } catch (error) {
      console.log(error);
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
