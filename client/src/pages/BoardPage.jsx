import { useEffect, useState } from 'react';
import BoardNav from '../components/BoardNav';
import QuestionList from '../components/QuestionList';
import Pagination from 'react-js-pagination';
import {
  BoardMainContent,
  NavContainer,
  BoardPageContainer,
  QuestionListContainer,
  QuestionButton,
  Line,
  Topcontent,
  SecondContent,
  PaginationDiv,
} from '../style/BoardPage';

import SearchBoard from '../components/SearchBoard';
import LatestInfo from '../components/LatestInfo';
import QNAbtn from '../components/QNAbtn';
// import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { getPosts } from '../api/api';

const BoardPage = () => {
  const [statusDatas, setStatusDatas] = useState('전체'); //첫번째줄은  useEffect
  const [question, setQuestion] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]); // 페이네이션에서 보여지는 내용들
  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const questionsPerPage = 6;
  const indexOfLastQuestions = currentPage * questionsPerPage;
  const indexOfFirstQuestions = indexOfLastQuestions - questionsPerPage;
  // const user = useSelector((state) => state.user);
  // const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const goToQuestionPage = () => {
    navigate('/newquestion');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') goToQuestionPage();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchQuestion = async (page) => {
    try {
      const response = await getPosts(page);
      setQuestion(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestion(1);
  }, []);

  useEffect(() => {
    statusDatas === '전체'
      ? setQuestion(question)
      : setQuestion(
          question.filter((question) => question.questionId === statusDatas)
        );
  }, [question, statusDatas]);

  useEffect(() => {
    setCurrentQuestions(
      question.slice(indexOfFirstQuestions, indexOfLastQuestions)
    );
  }, [question, currentPage, indexOfFirstQuestions, indexOfLastQuestions]);

  return (
    <BoardMainContent>
      <NavContainer>
        <BoardNav color='third' />
      </NavContainer>
      <BoardPageContainer>
        <Topcontent>
          <QNAbtn
            name='전체'
            showActive={statusDatas === '전체' ? true : false}
            handleSetShow={setStatusDatas}
          />
          <QNAbtn
            name='미해결'
            showActive={statusDatas === '미해결' ? true : false}
            handleSetShow={setStatusDatas}
          />
          <QNAbtn
            name='해결'
            showActive={statusDatas === '해결' ? true : false}
            handleSetShow={setStatusDatas}
          />
        </Topcontent>
        <Line />
        <SearchBoard />
        <SecondContent>
          <LatestInfo />
          <div className='btn_secon'>
            <QuestionButton
              onClick={goToQuestionPage}
              onKeyPress={handleKeyPress}
              aria-label='질문하기'
            >
              질문하기
            </QuestionButton>
          </div>
        </SecondContent>
        <Line />
        <QuestionListContainer>
          {currentQuestions.map((question) => (
            <Link
              to={`/boardpage/${question.questionId}`}
              key={question.questionId}
            >
              <QuestionList question={question} />
            </Link>
          ))}

          <p>No questions available.</p>
        </QuestionListContainer>
        <PaginationDiv>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={questionsPerPage}
            totalItemsCount={question.length}
            pageRangeDisplayed={5}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={handlePageChange}
          />
        </PaginationDiv>
      </BoardPageContainer>
    </BoardMainContent>
  );
};
export default BoardPage;
