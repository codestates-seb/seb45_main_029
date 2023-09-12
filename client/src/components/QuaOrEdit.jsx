// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { SmallButton } from '../style/QuestionDetail';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { StyledContainer } from '../style/QuaOrEdit';

const QuaOrEdit = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState(
    props.question ? props.question : {}
  );
  const [editedContent, setEditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');

  const navigate = useNavigate();

  const handleOnChangeTitle = (e) => {
    setEditedTitle(e.currentTarget.value);
  };
  console.log(editedTitle);

  const handleOnChangeContent = (e) => {
    setEditedContent(e.currentTarget.value);
  };
  console.log(editedContent);

  const handleUpdatedQa = async () => {
    if (editedContent.trim() !== '' && editedTitle.trim() !== '') {
      setQuestion({ ...question, content: editedContent, title: editedTitle });
      setEditedContent('');
      try {
        const response = await api(`/question/${props.questionId}`, 'patch', {
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
      const response = await api(`question/${props.questionId}`, 'delete');
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

  return (
    <StyledContainer>
      <div>
        <div className='container'>
          <div className='title-content'>
            <div className='title'>
              <input
                onChange={handleOnChangeTitle}
                value={editedTitle}
                type='text'
                name='title'
              />
            </div>

            <div className='author-date'>
              <div className='author'>{question.author}</div>
              <div className='time'>{question.createdAt}</div>
            </div>
          </div>
          <div className='author-content'>
            <textarea
              className='content'
              value={props.editedContent}
              onChange={handleOnChangeContent}
            />

            <div className='btn1'>
              <SmallButton onClick={handleUpdatedQa}>수정</SmallButton>
              <div className='btn2'>
                {' '}
                <SmallButton onClick={handleDeleteQuestion}>삭제</SmallButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};
export default QuaOrEdit;
