import { useEffect, useState } from 'react';
import BoardNav from '../components/BoardNav';
import QuestionList from '../components/QuestionList';
import PointPagination from '../components/PointPagination';
import {
  BoardMainContent,
  NavContainer,
  BoardPageContainer,
  QuestionListContainer,
  QuestionButton,
  Line,
  Topcontent,
  SecondContent,
} from '../style/BoardPage';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBoard from '../components/SearchBoard';
import LatestInfo from '../components/LatestInfo';
import QNAbtn from '../components/QNAbtn';
import axios from 'axios';

const BoardPage = (props) => {
  const [statusDatas, setStatusDatas] = useState('전체');
  const [questions, setQuestions] = useState(
    props.questions ? props.questions : []
  );

  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const [questionsPerPage] = useState(3);
  const [indexOfLastQuestions, setIndexOfLastQuestions] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstQuestions, setIndexOfFirstQuestions] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const user = useSelector((state) => state.user);

  const goToQuestionPage = () => {
    navigate('/newquestion');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') goToQuestionPage();
  };

  const setPage = (event) => {
    setCurrentPage(event.target + 1);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`${SERVER_URL}/question/${user.userId}`);
        setCurrentQuestions(data.data);
      } catch (error) {
        console.log('데이터가져오기 실패:', error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    statusDatas === '전체'
      ? setQuestions(questions)
      : setQuestions(
          questions.filter((question) => question.questionId === statusDatas)
        );
  }, [questions, statusDatas]);

  useEffect(() => {
    setCount(questions.length);
    setIndexOfLastQuestions(currentPage * questionsPerPage);
    setIndexOfFirstQuestions(indexOfLastQuestions - questionsPerPage);
  }, [currentPage, questions, indexOfLastQuestions, questionsPerPage]);

  useEffect(() => {
    setCurrentQuestions(
      questions.slice(indexOfFirstQuestions, indexOfLastQuestions)
    );
  }, [indexOfFirstQuestions, indexOfLastQuestions, questions]);

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
          {currentQuestions.length > 0 ? (
            currentQuestions.map((question) => (
              <QuestionList key={question.questionId} question={question} />
            ))
          ) : (
            <p>No questions available.</p>
          )}
        </QuestionListContainer>

        <PointPagination page={currentPage} count={count} setPage={setPage} />
      </BoardPageContainer>
    </BoardMainContent>
  );
};
export default BoardPage;
