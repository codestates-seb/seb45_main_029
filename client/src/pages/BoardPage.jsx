// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import BoardNav from '../components/BoardNav';
import { useSelector } from 'react-redux';
import QuestionList from '../components/QuestionList';
import ReactPagination from 'react-paginate';
import {
  BoardMainContent,
  NavContainer,
  BoardPageContainer,
  QuestionListContainer,
  Button1,
  Button2,
  Button3,
  SearchBox,
  QuestionButton,
  Line,
  Topcontent,
  BottomContent,
  SecondCotent,
} from '../style/BoardPage';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';

const BoardPage = (props) => {
  const [status, setStatus] = useState('unresoveled');
  const [questions, setQuestions] = useState(
    props.question ? props.question : []
  );
  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const questionsPerPage = 6;
  const [currentQuestions, setCurrentQuestions] = useState([]); // 질문데이터 배열
  const pageCount = Math.ceil(questions.length / questionsPerPage);

  const [isAutoSearch, setIsAutoSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([]);
  const [autoSearchKeyword, setAutoSearchKeyword] = useState('');
  const [focusIndex, setFocusIndex] = useState(-1);
  const listRef = useRef(null);

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleButtonClick = () => {
    setStatus(status === 'unresoveled' ? 'resoveled' : 'unresoveled');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') goToQuestionPage();
  };

  const goToQuestionPage = () => {
    navigate('/newquestion');
  };
  const handleInputChange = (e) => {
    const enteredValue =
      e.nativeEvent.inputType === 'deleteContentBackward'
        ? ''
        : e.nativeEvent.data;
    if (isAutoSearch) {
      focusIndex >= 0 && setSearchKeyword(autoSearchKeyword + enteredValue);
      setIsAutoSearch(false);
      setFocusIndex(-1);
      return;
    }

    setSearchKeyword(e.target.value);
  };

  const goToSearchPage = () => {
    // eslint-disable-next-line no-undef
    if (isNull()) return;
    navigate(
      `/search?query=${isAutoSearch ? autoSearchKeyword : searchKeyword}`
    );
  };

  const KeyEvent = {
    Enter: () => {
      goToSearchPage();
    },
    ArrowDown: () => {
      if (currentQuestions.length === 0) {
        return;
      }
      if (listRef.current.childElementCount === focusIndex + 1) {
        setFocusIndex(() => 0);
        return;
      }
      if (focusIndex === -1) {
        setIsAutoSearch(true);
      }
      setFocusIndex((index) => index + 1);
      setAutoSearchKeyword(currentQuestions.results[focusIndex + 1].title);
    },
    ArrowUp: () => {
      if (focusIndex === -1) {
        return;
      }
      if (focusIndex === 0) {
        setAutoSearchKeyword('');
        setFocusIndex((index) => index - 1);
        setIsAutoSearch(false);
        return;
      }

      setFocusIndex((index) => index - 1);
      setAutoSearchKeyword(currentQuestions.results[focusIndex - 1].title);
    },
    Escape: () => {
      setAutoSearchKeyword('');
      setFocusIndex(-1);
      setIsAutoSearch(false);
    },
  };

  const handleKeyUp = (e) => {
    if (KeyEvent[e.key]) KeyEvent[e.key]();
  };

  useEffect(() => {
    if (isAutoSearch) return;

    const fetchData = async () => {
      try {
        const response = await api(`/question/1/${searchKeyword}`);
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchKeyword) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword, isAutoSearch]);

  const handlePageChange = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const fetchQuestions = async () => {
    try {
      const response = await api(`/question/${user.memberId}`);

      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * questionsPerPage;
    const newEndIndex = newStartIndex + questionsPerPage;
    console.log(newStartIndex, newEndIndex);

    setCurrentQuestions(questions.slice(newStartIndex, newEndIndex));
  }, [currentPage, questions]);

  return (
    <BoardMainContent>
      <NavContainer>
        <BoardNav color='third' />
      </NavContainer>
      <BoardPageContainer>
        <Topcontent>
          <div className='btn_top'>
            <Button1>전체</Button1>
            <Button2 onClick={handleButtonClick}>미해결</Button2>
            <Button3 onClick={handleButtonClick}>해결</Button3>
          </div>
        </Topcontent>
        <Line />
        <SearchBox>
          <div className='search'>
            <img src='/imgaes/icon-park-outline-search.png' alt='search' />
            <input
              type='text'
              placeholder='검색해보세요'
              title='검색'
              name='검색'
              value={isAutoSearch ? autoSearchKeyword : searchKeyword}
              onChange={handleInputChange}
              onKeyUp={handleKeyUp}
            ></input>
            <button onClick={goToSearchPage}>검색</button>
          </div>
        </SearchBox>
        <SecondCotent>
          <div className='btn_secon'>
            <QuestionButton
              onClick={goToQuestionPage}
              onKeyPress={handleKeyPress}
              aria-label='질문하기'
            >
              질문하기
            </QuestionButton>
          </div>
        </SecondCotent>
        <Line />
        <QuestionListContainer ref={listRef}>
          {currentQuestions.map((question) => (
            <QuestionList key={question.questionId} question={question} />
          ))}
        </QuestionListContainer>
        <BottomContent>
          <ReactPagination
            containerClassName={'pagination'}
            activeLinkClassName={'active'}
            pageLinkClassName={'page_num'}
            previousLinkClassName={'page_num'}
            nextLinkClassName={'page_num'}
            onPageChange={handlePageChange}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            breakLabel='...'
            renderOnZeroPageCount={null}
            nextLabel='>'
            previousLabel='<'
          />
        </BottomContent>
      </BoardPageContainer>
    </BoardMainContent>
  );
};
export default BoardPage;
