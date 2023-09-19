import {
  QuestionContainer,
  ContentCard,
  BottomContainer,
  ContainerTitle,
  Line,
} from '../style/QuestionList';
import Comments from './Comments';
import parse from 'html-react-parser';

<<<<<<<<< Temporary merge branch 1
function QuestionList(props) {
  console.log(props);
=========
function QuestionList({ question }) {
>>>>>>>>> Temporary merge branch 2
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
    timeZone: 'Asia/Seoul',
  });

  return (
    <>
      <QuestionContainer>
        <ContainerTitle>{question.title}</ContainerTitle>
        <ContentCard>
          <div className='question-message'>{parse(question.content)}</div>
        </ContentCard>
        <BottomContainer>
          <div className='wrapper'>
            <span className='question-author'>{question.author} </span>

            <span className='question-createdAt'>{parsedDate}</span>
          </div>

          <div className='icon-count'>
            <div>
              <img src='images/likes.png' alt='likes' />
            </div>

            <div className='answer-count'>
              <Comments
                comments_count={question.comments_count}
                questionId={question.questionId}
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
