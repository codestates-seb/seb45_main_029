import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setBookmark, deleteBookmark } from '../redux/userSlice';

const IframeDesign = styled.iframe`
  margin: 0.5em;
`;

const ImageDesign = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

// @todo 서버 URI 연결
export default function VideoDetail({ youtubeLink, videoId }) {
  const userInfo = useSelector((state) => state.user);
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const dispatch = useDispatch();

  const imgOnclickHandler = () => {
    setBookmarkClick(!bookmarkClick);
    if (bookmarkClick) {
      const bookmark = [...userInfo.bookmark, videoId];
      dispatch(setBookmark(videoId));
      //axios.patch('url', { bookmark });
    } else {
      const bookmark = userInfo.bookmark.filter((el) => {
        el !== videoId;
      });
      dispatch(deleteBookmark(videoId));
      //axios.patch('url', { bookmark });
    }
  };

  useEffect(() => {
    userInfo.bookmark.forEach((el) => {
      if (el === videoId) {
        setBookmarkClick(true);
      }
    });
  }, [userInfo.bookmark, videoId]);

  return (
    <IframeContainer>
      <IframeDesign
        width='490'
        height='315'
        src={youtubeLink.replace('watch?v=', 'embed/')}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></IframeDesign>
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
