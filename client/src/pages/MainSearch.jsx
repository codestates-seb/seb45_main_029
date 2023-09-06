import { useEffect, useState, useRef } from 'react';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/UseFetch'; // 커스텀 훅
import {
  InputContainer,
  InputDesign,
  ImageDesign,
  MainContainer,
} from '../style/Main';

export default function MainSearch() {
  const [searchContent, setSearchContent] = useState('');
  const location = useLocation();
  const [pageNum, setPageNum] = useState(1);

  const observerRef = useRef(null);
  const inputRef = useRef(null);

  const { list, hasMore, isLoading } = useFetch(pageNum);

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
    // axios로 전체 데이터를 받아온 후, setContents로 contents 변수 초기화
    const fromMainContent = location.state.value;
    inputRef.current.value = fromMainContent;
    setSearchContent(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = searchContent;
  }, [searchContent]);

  const onClickSearchHandler = (e) => {
    const content = e.target.previousSibling.value;
    if (content === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    setSearchContent(e.target.previousSibling.value);
    // axios로 content 값을 서버로 보내서, 필터링된 결과값을 가져온 후 setContents로 초기화
  };

  const onKeyUpHandler = (e) => {
    const content = e.target.value;
    if (e.target.value === '' || content.replaceAll(' ', '').length === 0) {
      return;
    }
    if (e.keyCode === 13) {
      setSearchContent(e.target.value);
    }
  };

  return (
    <MainContainer>
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
      {list?.map((elem, index) => {
        return <img key={index} src={elem} alt='picture' />;
      })}
      <div ref={observer} />
      <>{isLoading && <Loading />}</>
    </MainContainer>
  );
}
