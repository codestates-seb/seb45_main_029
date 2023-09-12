// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { api } from '../api/api';
import { styled } from 'styled-components';
const Wrapper = styled.div`
  cursor: pointer;
`;

export default function Like({
  comments_count,
  questionId,
  answerId,
  user_has_commented,
}) {
  const [comments, setComments] = useState(comments_count);
  const [commented, setCommented] = useState(user_has_commented);
  let uri = '';
  let method = '';

  const handleClick = () => {
    method = commented ? 'delete' : 'post';
    uri =
      `/questions/${questionId}` +
      (answerId ? `/answers/${answerId}/comments` : `/comments`);
    console.log(method, uri);
    api(uri, method)
      .then((response) => {
        if (response.success) {
          setComments(response.comments_count);
          setCommented(response.user_has_commented);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <div onClick={handleClick} aria-hidden='true'>
        {commented ? <img src='/images/comment.png' alt='comments'></img> : ''}
      </div>
      <div>{comments}</div>
    </Wrapper>
  );
}
