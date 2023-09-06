import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  InputContainer,
  InputDesign,
  ImageDesign,
  MainContainer,
} from '../style/Main';

export default function MainSearch() {
  const [contents, setContents] = useState([]);
  const [searchContent, setSearchContent] = useState('');
  const location = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    // axios로 전체 데이터를 받아온 후, setContents로 contents 변수 초기화
    //setContents()
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
      {contents ? (
        contents.map((elem, index) => {
          return elem;
        })
      ) : (
        <></>
      )}
    </MainContainer>
  );
}
