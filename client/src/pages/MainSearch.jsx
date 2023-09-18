import { useState, useRef, useEffect } from 'react';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import styled from 'styled-components';
import { InputContainer, InputDesign, ImageDesign } from '../style/Main';
import Modal from '../components/Modal';
import VideoDetail from '../components/VideoDetail';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
// @todo : 혹시나 자동완성 기능? ㅋㅋㅋ

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const VideoContainerFlexWrap = styled.div`
  width: 96rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const NotFoundDiv = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function MainSearch() {
  const location = useLocation();
  const [keyword, setKeyword] = useState(location.state.value);
  const [pageNum, setPageNum] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const [videoIds, setVideoIds] = useState([]);

  const observerRef = useRef(null);
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  const { list, hasMore, isLoading } = useFetch(pageNum, keyword, setPageNum); // 커스텀훅, list 서버에서 가져온 데이터

  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setPageNum((page) => page + 1);
      }
    });
    node && observerRef.current.observe(node);
  };

  useEffect(() => {
    // 새로고침 시 정보 받아오기
    const info = JSON.parse(window.localStorage.getItem('info'));
    if (info) dispatch(setUser(info));
  }, [dispatch]);
  useEffect(() => {
    const asyncFunction = async () => {
      const data = await axios.get(
        `${SERVER_URL}/video/bookmark/?page=1&size=30`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.accessToken}` || '',
          },
        }
      );
      setVideoIds(data.data.data.map((el) => el.videoId));
    };
    if (userInfo.accessToken) asyncFunction();
  }, [userInfo]);

  const openModal = (index) => {
    setModalOpen(true);
    setListIndex(index);
  };

  useEffect(() => {
    inputRef.current.value = keyword;
  }, []);

  const onClickSearchHandler = (e) => {
    const content = e.target.previousSibling.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    inputRef.current.value = e.target.previousSibling.value;
    setKeyword(inputRef.current.value);
  };

  const onKeyUpHandler = (e) => {
    const content = e.target.value;
    if (e.target.value === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    if (e.keyCode === 13) {
      inputRef.current.value = e.target.value;
      setKeyword(inputRef.current.value);
    }
  };

  return (
    <>
      <MainContainer>
        <Modal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          list={list}
          listIndex={listIndex}
          videoId={true}
        />
        <InputContainer>
          <InputDesign
            onKeyUp={onKeyUpHandler}
            placeholder='검색하기'
            ref={inputRef}
          />
          <ImageDesign
            onClick={onClickSearchHandler}
            src='/images/magnify.png'
            alt='magnifier'
          />
        </InputContainer>
        {list?.length === 0 ? (
          <NotFoundDiv>찾으시는 정보가 없습니다</NotFoundDiv>
        ) : (
          <VideoContainerFlexWrap>
            {list?.map((elem, index) => {
              return (
                <div key={index}>
                  <VideoDetail
                    thumb={elem.thumbnail}
                    videoId={elem.videoId}
                    openModal={openModal}
                    videoIds={videoIds}
                  />
                </div>
              );
            })}
          </VideoContainerFlexWrap>
        )}

        {isLoading && <Loading />}
      </MainContainer>
      <div ref={observer} />
    </>
  );
}
