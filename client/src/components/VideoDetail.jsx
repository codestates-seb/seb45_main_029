import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ImageDesign = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const ImageFrame = styled.img`
  width: 20rem;
  height: 15rem;
`;

const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

// @todo 서버 URI 연결
export default function VideoDetail({ thumbnail, videoId }) {
  const [bookmarkClick, setBookmarkClick] = useState(false);

  const imgOnclickHandler = () => {
    setBookmarkClick(!bookmarkClick);
    if (bookmarkClick) {
      console.log('hey');
      axios.post(`${import.meta.env.SERVER_URL}/video/bookmark/${videoId}`, {});
    } else {
      axios.delete(`${import.meta.env.SERVER_URL}/video/bookmark/${videoId}`);
    }
  };

  useEffect(() => {}, []);

  return (
    <IframeContainer>
      <ImageFrame src={thumbnail} alt='watch'></ImageFrame>
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
