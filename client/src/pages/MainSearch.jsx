import { useEffect, useState, useRef } from 'react';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';

import {
  InputContainer,
  InputDesign,
  ImageDesign,
  MainContainer,
} from '../style/Main';
import Modal from '../components/Modal';

export default function MainSearch() {
  const location = useLocation();

  const [pageNum, setPageNum] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [listIndex, setListIndex] = useState(0);

  const observerRef = useRef(null);
  const inputRef = useRef(null);

  const { list, hasMore, isLoading } = useFetch(pageNum, location.state.value); // 커스텀훅, list 서버에서 가져온 데이터

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

  useEffect(() => {
    inputRef.current.value = location.state.value;
  }, []);

  const onClickSearchHandler = (e) => {
    const content = e.target.previousSibling.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    inputRef.current.value = e.target.previousSibling.value;
  };

  const onKeyUpHandler = (e) => {
    const content = e.target.value;
    if (e.target.value === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    if (e.keyCode === 13) {
      inputRef.current.value = e.target.value;
    }
  };

  return (
    <MainContainer>
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        list={list}
        listIndex={listIndex}
      />
      <InputContainer>
        <InputDesign
          onKeyUp={onKeyUpHandler}
          placeholder='검색하기'
          ref={inputRef}
        />
        {/* 검색하기 */}
        <ImageDesign
          onClick={onClickSearchHandler}
          src='/images/magnify.png'
          alt='magnifier'
        />
      </InputContainer>

      {/* 받아온 URL로 썸네일 추출하고 */}
      {list?.map((elem, index) => {
        return (
          <img
            onClick={() => {
              openModal(index);
            }}
            key={index}
            src={elem.thumbnail}
            alt='picture'
          />
        );
      })}

      <div ref={observer} />
      {isLoading && <Loading />}
    </MainContainer>
  );
}
