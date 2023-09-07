// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  QuestionContainer,
  ContentCard,
  BottomContainer,
  ContainerTitle,
  Line,
} from '../style/QuestionList';
import { useNavigate } from 'react-router-dom';

const QuestionItem = ({ question }) => {
  const navigate = useNavigate();

  const questiondetail = () => {
    navigate('/question/:id');
  };
  const parsedDate = new Date(question.createdAt).toLocaleDateString('ko-kr', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  });

  return (
    <>
      <QuestionContainer>
        <ContainerTitle>{question.title}</ContainerTitle>
        <ContentCard onClick={questiondetail} key={question.questionId}>
          <div className='question-message'>{question.content}</div>
        </ContentCard>
        <BottomContainer>
          <div className='wrapper'>
            <span className='question-author'>{question.author} </span>

            <span className='question-createdAt'>{parsedDate}</span>
          </div>

          <div className='icon-count'>
            <div>
              <div>
                <img src='/images/ph-heart-thin.png' alt='' />
              </div>
              <span>{question.likes_count}</span>
            </div>

            <div>
              <div>
                <img src='/images/iconmoon-comment-thin.png' alt='' />
              </div>
              <span>{question.comments.length}</span>
            </div>
          </div>
        </BottomContainer>
      </QuestionContainer>
      <Line />
    </>
  );
};
export default QuestionItem;
