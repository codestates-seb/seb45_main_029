import { useState, useRef } from 'react';
import WebEditor from '../webEditor/WebEditor';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewquestionContainer = styled.div`
  width: 43.89rem;
  height: 36rem;
  display: flex;
  flex-direction: column;
  margin-top: 10.12rem;
  margin-left: 38.13rem;
  .title-wrapper {
    display: flex;
    justify-content: flex-start;
    color: var(--black);
    text-align: center;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 2.81rem;
    & .input-title {
      display: flex;
      justify-content: flex-start;
      font-weight: 900;
    }
  }
  .editor-content {
    width: 43.88506rem;
    height: 20.3125rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 1.25rem;
    margin-left: 49rem;
  }
`;
const Button = styled.button`
  width: 4.375rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #0c2139;

  background-color: ${(props) => (props.button ? ' #859DE8' : '#FFF')};
`;

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Newquestion = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userInfo = useSelector((state) => state.user);
  const navigate = useNavigate();
  const titleRef = useRef();

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = async () => {
    if (title.length < 1) {
      titleRef.current.focus();
      return;
    }
    try {
      const data = {
        title,
        content,
      };

      await axios.post(`${SERVER_URL}/question`, data, {
        headers: {
          Authorization: `Bearer ${
            userInfo.accessToken ||
            JSON.parse(window.localStorage.getItem('info')).accessToken
          }`,
        },
      });
      navigate('/boardpage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewquestionContainer>
      <section>
        <div className='title-wrapper'>
          <input
            className='input-title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='제목을 입력하세요'
            ref={titleRef}
          />
        </div>

        <div className='editor-content'>
          <WebEditor data={content} onChange={handleEditorChange} />
        </div>
      </section>
      <div className='btn-wrapper'>
        <Button onClick={() => navigate(-1, { replace: true })}>취소</Button>
        <Button onClick={handleSubmit} disabled={title.length < 1}>
          등록
        </Button>
      </div>
    </NewquestionContainer>
  );
};

export default Newquestion;
