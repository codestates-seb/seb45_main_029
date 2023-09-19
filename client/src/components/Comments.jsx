import { useState, useEffect } from 'react';
import { api } from '../api/api';
import { styled } from 'styled-components';
const Wrapper = styled.div`
  cursor: pointer;
`;

export default function Like({ comments_count, questionId }) {
  const [comments, setComments] = useState(comments_count);
  useEffect(() => {
    api(`/answer/${questionId}?page=1&size=10`, 'get')
      .then((response) => {
        if (response) {
          console.log(response);
          setComments(response.data.data.length);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      <div aria-hidden='true'>
        <img src='/images/comment.png' alt='comments'></img>
      </div>
      <div>{comments}</div>
    </Wrapper>
  );
}
