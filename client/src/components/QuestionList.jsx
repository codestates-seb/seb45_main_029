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

function QuestionList({ props }) {
  const navigate = useNavigate();

  const questiondetail = () => {
    navigate('/questionDetail');
  };
  const parsedDate = new Date(props.createdAt).toLocaleDateString('ko-kr', {
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
        <ContainerTitle>{props.title}</ContainerTitle>
        <ContentCard onClick={questiondetail} key={props.questionId}>
          <div className='question-message'>{props.content}</div>
        </ContentCard>
        <BottomContainer>
          <div className='wrapper'>
            <span className='question-author'>{props.author} </span>

            <span className='question-createdAt'>{parsedDate}</span>
          </div>

          <div className='icon-count'>
            <div>
              <div>
                <img src='/images/likes.png' alt='likes' />
              </div>
              <span>{props.likes_count}</span>
            </div>

            <div>
              <div>
                <img src='/images/comment.png' alt='comment' />
              </div>
              <span>{props.comments.length}</span>
            </div>
          </div>
        </BottomContainer>
      </QuestionContainer>
      <Line />
    </>
  );
}
export default QuestionList;
