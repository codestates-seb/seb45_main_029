import { useState } from 'react';
import BoardNav from '../components/BoardNav';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Answer from '../components/Answer';
import { api } from '../api/api';
import {
  Line,
  DetailContainer,
  DetailMainContent,
  NavContainer,
  TitleContainer,
  ContentBox,
  SmallButton,
} from '../style/QuestionDetail';
import axios from 'axios';

const QuestionDetail = (props) => {
  const [editedContent, setEditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [answers, setAnswers] = useState(props.question?.answers || []);
  const [question, setQuestion] = useState(props.question || {});

  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const handleUpdateQuestion = async () => {
    if (editedContent.trim() !== '' && editedTitle.trim() !== '') {
      setQuestion({ ...question, content: editedContent, title: editedTitle });
      setEditing(false);
      setEditedContent('');
      try {
        const response = await api(`/question/1/${props.questionId}`, 'patch', {
          editedContent,
          editedTitle,
        });
        if (response.success) {
          console.log(response);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      const response = await axios.delete(
        `${SERVER_URL}/question/1/${props.questionId}`
      );
      if (response.success) {
        console.log(response.message);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
      console.log('서버에 삭제 요청은 보냇음');
    }
    navigate(-1);
  };

  const handleDeleteAnswer = async (answerId) => {
    const updatedAnswers = answers.filter(
      (answer) => answer.answerId !== answerId
    );
    setAnswers(updatedAnswers);
    try {
      const response = await api(
        `question/${props.questionId}/answer/1/${answerId}`,
        'delete'
      );
      if (response.success) {
        console.log(response.message);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <DetailMainContent>
      <NavContainer>
        <BoardNav color='third' />
      </NavContainer>
      <DetailContainer>
        <TitleContainer>
          {editing ? (
            <div className='title-edit'>
              {/* 편집 중인 답변의 내용을 입력하는 텍스트 에어리어 */}
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              {/* 수정된 답변을 저장하는 버튼 */}
            </div>
          ) : (
            <div className='title'>{question.title}</div>
          )}
        </TitleContainer>
        <Line />
        <ContentBox>
          {editing ? (
            <div>
              {/* 편집 중인 답변의 내용을 입력하는 텍스트 에어리어 */}
              <textarea
                className='editarea'
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              {/* 수정된 답변을 저장하는 버튼 */}
              <SmallButton onClick={handleUpdateQuestion}>Save</SmallButton>
            </div>
          ) : (
            <div>
              <div className='content'>
                {/* 답변 내용을 표시 */}
                {question.content}
              </div>
            </div>
          )}
          <div className='author-container'>
            <div className='author'>{question.author}</div>
            <div className='author-right-container'>
              {user.userId === question.userId ? (
                <div className='my-text'>
                  <div
                    className='btn1'
                    onClick={() => handleUpdateQuestion(question.content)}
                    aria-hidden='true'
                  >
                    <span>수정</span>
                  </div>
                  <div
                    className='btn2'
                    onClick={() => handleDeleteQuestion(question.questionId)}
                    aria-hidden='true'
                  >
                    <span>삭제</span>
                  </div>
                </div>
              ) : null}
              <div className='time'>{question.createdAt}</div>
            </div>
          </div>
        </ContentBox>
        <Line />
        {question && <div className='title'>{question.answers} Answer</div>}
        {answers.map((answer) => {
          return (
            <Answer
              key={answer.answerId}
              answer={answer}
              questionId={question.questionId}
              handleDelete={handleDeleteAnswer}
            />
          );
        })}
        <Line />
      </DetailContainer>
    </DetailMainContent>
  );
};
export default QuestionDetail;
