// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { api } from '../api/api';
import { SmallButton } from '../style/QuestionDetail';

const AnswerOrEdit = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [answer, setAnswer] = useState(props.answer ? props.answer : {});
  const [editedContent, setEditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');

  const handleOnChangeTitle = (e) => {
    setEditedTitle(e.currentTarget.value);
  };
  console.log(editedTitle);

  const handleOnChangeContent = (e) => {
    setEditedContent(e.currentTarget.value);
  };
  console.log(editedContent);

  const handleUpdatedAn = async () => {
    if (editedContent.trim() !== '' && editedTitle.trim() !== '') {
      setAnswer({ ...answer, content: editedContent, title: editedTitle });
      setEditedContent('');
      try {
        const response = await api(`/answer/${props.answerId}`, 'patch', {
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

  const handleDeleteAnswer = async () => {
    const updatedAnswers = answer.filter(
      (answer) => answer.answerId !== props.answerId
    );
    setAnswer(updatedAnswers);
    try {
      const response = await api(
        `question/${props.questionId}/answer/${props.answerId}`,
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
    <>
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
          </div>

          <div className='avtar'>
            <div className='author'>{answer.author}</div>
            <div className='time'>{answer.createdAt}</div>
          </div>
          <div className='author-content'>
            <textarea
              className='answer'
              value={editedContent}
              onChange={handleOnChangeContent}
            />

            <div className='btn1'>
              <SmallButton onClick={handleUpdatedAn}>수정</SmallButton>
              <div className='btn2'>
                {' '}
                <SmallButton onClick={handleDeleteAnswer}>
                  삭제
                </SmallButton>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnswerOrEdit;
