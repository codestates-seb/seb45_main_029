// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MyPageNav from '../components/MyPageNav';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonContainer } from '../style/BoardPage';

const BoardPage = (props) => {
  const [status, setStatus] = useState('unresoveled');
  const [question, setQuestion] = useState(
    props.question ? props.question : []
  );
  const [answers, setAnswers] = useState(
    props.question.answers ? props.question.answers : []
  );
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editing, setEdting] = useState(false);
  const [value, setValue] = (useState = '');

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearchValue = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    setStatus(status === 'unresoveled' ? 'resoveled' : 'unresoveled');
  };
  const handleEdit = () => {
    setEditedTitle(question.title);
    setEditedContent(question.content);
    setEdting();
  };

  const handleSaveEdit = async () => {
    if (editedContent.trim() !== '' && editedTitle.trim() !== '') {
      setQuestion({ ...question, content: editedContent, title: editedTitle });
      setEditing(false);
      setEditedContent('');
      try {
        const response = await api(`/questions/${props.questionId}`, 'patch', {
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

  const handleDeleteQuestion = async (questionId) => {
    try {
      const response = await api(`questions/${props.questionId}`, 'delete');
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
    <>
      <MyPageNav />
      <ButtonContainer>
        <div>게시판</div>
      </ButtonContainer>
    </>
  );
};
export default BoardPage;
