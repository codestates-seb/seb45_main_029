import { useState, useRef } from 'react';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import styled from 'styled-components';
import {
  InputContainer,
  InputDesign,
  ImageDesign,
  MainContainer,
} from '../style/Main';
import Modal from '../components/Modal';
import { VideoContainerFlexWrap } from '../style/MyPage';

const ImgDesign = styled.img`
  width: 15rem;
  height: 15rem;
  cursor: pointer;
  margin: 3rem;
`;

export default function MainSearch() {
  const location = useLocation();
  const [keyword, setKeyword] = useState(location.state.value);
  const [pageNum, setPageNum] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const observerRef = useRef(null);
  const inputRef = useRef(null);

  const { list, hasMore, isLoading } = useFetch(pageNum, keyword); // 커스텀훅, list 서버에서 가져온 데이터

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

  const openModal = (index) => {
    setModalOpen(true);
    setListIndex(index);
  };

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
    <MainContainer>
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        list={list}
        listIndex={listIndex}
        videoId={false}
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
      <VideoContainerFlexWrap>
        {list?.map((elem, index) => {
          return (
            <div key={index}>
              <ImgDesign
                onClick={() => {
                  openModal(index);
                }}
                src={elem.thumbnail}
                alt='picture'
              />
            </div>
          );
        })}
      </VideoContainerFlexWrap>
      <div ref={observer} />
      {isLoading && <Loading />}
    </MainContainer>
  );
}
