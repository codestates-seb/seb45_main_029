import {
  QuestionContainer,
  ContentCard,
  BottomContainer,
  ContainerTitle,
  Line,
} from '../style/QuestionList';
import { useNavigate } from 'react-router-dom';
import Like from './Like';
import Comments from './Comments';

function QuestionList({ question }) {
  const navigate = useNavigate();

  const questiondetail = () => {
    navigate('/questionDetail');
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
        <ContentCard onClick={questiondetail}>
          <div className='question-message'>{question.content}</div>
        </ContentCard>
        <BottomContainer>
          <div className='wrapper'>
            <span className='question-author'>{question.author} </span>

            <span className='question-createdAt'>{parsedDate}</span>
          </div>

          <div className='icon-count'>
            <div>
              <Like
                likes_count={question.likes_count}
                questionId={question.questionId}
                user_has_liked={question.user_has_liked}
              ></Like>
            </div>

            <div>
              <Comments
                comments_count={question.comments_count}
                answerId={question.answerId}
                user_has_commented={question.user_has_commented}
              ></Comments>
            </div>
          </div>
        </BottomContainer>
      </QuestionContainer>
      <Line />
    </>
  );
}
export default QuestionList;
