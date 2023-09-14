// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import BoardNav from '../components/BoardNav';
import QuestionList from '../components/QuestionList';
import ReactPagination from 'react-paginate';
import {
  BoardMainContent,
  NavContainer,
  BoardPageContainer,
  QuestionListContainer,
  QuestionButton,
  Line,
  Topcontent,
  BottomContent,
  SecondContent,
} from '../style/BoardPage';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';

import SearchBoard from '../components/SearchBoard';
import LatestInfo from '../components/LatestInfo';
import QNAbtn from '../components/QNAbtn';

const BoardPage = (props) => {
  const [statusDatas, setStatusDatas] = useState('전체');
  const [questions, setQuestions] = useState(
    props.questions ? props.questions : []
  );
  const questionsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const [currentQuestions, setCurrentQuestions] = useState([]); // 질문데이터 배열
  const pageCount = Math.ceil(questions.length / questionsPerPage);
  const navigate = useNavigate();

  const goToQuestionPage = () => {
    navigate('/newquestion');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') goToQuestionPage();
  };

  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1);
  };

  const fetchQuestions = async () => {
    try {
      const response = await api(`/question?page=1&size=10&type=1`);
      setQuestions(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(questions);

  useEffect(() => {
    statusDatas === '전체'
      ? setQuestions(questions)
      : setQuestions(
          questions.filter((question) => question.questionId === statusDatas)
        );
  }, [questions, statusDatas]);

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * questionsPerPage;
    const newEndIndex = newStartIndex + questionsPerPage;
    //console.log(newStartIndex, newEndIndex);

    setCurrentQuestions(questions.slice(newStartIndex, newEndIndex));
  }, [currentPage, questions]);

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
          {Array.isArray(currentQuestions) &&
            currentQuestions.map((questions) => (
              <QuestionList key={questions.questionId} question={questions} />
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
            pageRangeDisplayed={3}
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
