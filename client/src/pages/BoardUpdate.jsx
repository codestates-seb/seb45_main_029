import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../api/api';
import { Line, DetailContainer, UpdateMainContent } from '../style/BoardUpdate';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const BoardUpdate = () => {
  const [question, setQuestion] = useState({
    questionId: 0,
    title: '',
    createdAt: '',
    contents: '',
  });

  const userInfo = useSelector((state) => state.user);

  const { questionId } = useParams();
  const navigate = useNavigate();

  const { title, contents } = question;

  const onChange = (e) => {
    const { value, name } = e.target.value;
    setQuestion({ ...question, [name]: value });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await api(`/question?page=1&size=10&type=1${questionId}`, {
          headers: {
            Authorization: `Bearer ${
              userInfo.accessToken ||
              JSON.parse(window.localStorage.getItem('info')).accessToken
            }`,
          },
        });
        setQuestion(data.data.question);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleUpdateQuestion = async () => {
    await api(`/question/${questionId}`, 'patch').then((response) => {
      if (response.success) console.log(response);
      navigate('/boardpage' + questionId);
    });
  };

  const handleDeleteQuestion = async () => {
    try {
      const response = await axios.delete(`${SERVER_URL}/question/`);
      if (response.success) {
        console.log(response.message);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
      console.log('서버에 삭제 요청은 보냇음');
    }
  };

  return (
    <UpdateMainContent>
      <DetailContainer>
        <div className='title'>
          <input type='text' name='title' value={title} readOnly={true} />
        </div>
        <div className='content'>
          <textarea name='contents' value={contents} onChange={onChange} />
          <div className='author'>{question.author}</div>
          <div className='createAt'>{question.createdAt}</div>
        </div>

        <div className='author-right-container'>
          {userInfo.questionId === question.questionId ? (
            <div className='my-text'>
              <div
                className='btn1'
                onClick={() => handleUpdateQuestion(question.questionId)}
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

        <Line />
      </DetailContainer>
    </UpdateMainContent>
  );
};
export default BoardUpdate;
