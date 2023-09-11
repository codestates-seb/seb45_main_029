// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 4rem;
  height: 1.5625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;

  color: #000;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  .btn {
    color: var(--black);
    background-color: var(--white);
    &:hover {
      color: var(--white);
      background-color: #eaeaea;
    }
  }
  .btn--active {
    color: var(--white);
    background-color: var(--blue);
  }
`;

export default function QNAbtn({ name, showActive, handleSetShow }) {
  return (
    <StyledButton
      className={`btn ${showActive ? 'btn--active' : ''}`}
      onClick={() => handleSetShow(name)}
    >
      {' '}
      {name}
    </StyledButton>
  );
}
