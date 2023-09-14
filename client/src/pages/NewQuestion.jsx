// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import WebEditor from '../webEditor/WebEditor';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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

  background-color: ${(props) => (props.primary ? ' #859DE8' : '#FFF')};
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

    axios
      .post(
        'http://ec2-15-164-225-251.ap-northeast-2.compute.amazonaws.com:8080/question',
        data
      )
      .then((res) => console.log(res));
    console.log('hey');
  };
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <NewquestionContainer>
      <section>
        <div className='title-wrapper'>
          <textarea
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
        <Button primary onClick={handleSubmit}>
          등록
        </Button>
      </div>
    </NewquestionContainer>
  );
};

export default Newquestion;
