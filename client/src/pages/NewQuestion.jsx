// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import WebEditor from '../webEditor/WebEditor';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/Button';
import styled from 'styled-components';

const NewquestionContainer = styled.div`
  width: 43.89rem;
  height: 36rem;
  display: flex;
  .title-wrapper {
    display: flex;
    justify-content: flex-start;
    color: var(--black);
    text-align: center;
    font-size: 1.75rem;
    font-weight: 700;
  }
`;
const Newquestion = () => {
  const [title, setTitle] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const titleRef = useRef();

  const handleSubmit = () => {
    if (title.length < 1) {
      titleRef.current.focus();
      return;
    }

    const data = {
      title,
      content,
    };

    axios.post('http://localhost:8080/api/question/post', data).then((res) => {
      if (res.status === 200) {
        navigate('/boardpage', { replace: true });
        return;
      } else {
        alert('업로드 실패.');
        return;
      }
    });
  };
  return (
    // eslint-disable-next-line react/jsx-no-undef
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
          <WebEditor />
        </div>
      </section>
      <div className='btn-wrapper'>
        <Button onClick={() => navigate(-1, { replace: true })}>취소</Button>
        <Button onClick={handleSubmit}>등록</Button>
      </div>
    </NewquestionContainer>
  );
};

export default Newquestion;
