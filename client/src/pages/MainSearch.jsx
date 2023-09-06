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
  const location = useLocation();

  const inputRef = useRef(null);

  useEffect(() => {
    // axios로 전체 데이터를 받아온 후, setContents로 contents 변수 초기화
    //setContents()
    const SearchContent = location.state.value;
    inputRef.current.value = SearchContent;
  }, []);

  const onClickSearchHandler = (e) => {
    if (e.target.previousSibling === '') {
      return;
    }
    // axios로 e.target.previousSibling 값을 서버로 보내서
    // setContents(e.target.previousSibling); // 검색한 값을 불러옴
  };

  const onKeyUpHandler = (e) => {
    if (e.target.value === '') {
      return;
    }
    if (e.keyCode === 13) {
      // setContents(e.target.value); // 마찬가지
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
