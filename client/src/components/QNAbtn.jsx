// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  font-size:1.375rem;
  font-weight: 500;
  cursor: pointer;
  color: #848282;

  position: relative;
  
  
  &:hover {
    color: var(--black);
    font-weight: 600;
  }
  
  .active {
    color: var(--black);
    font-weight: 600;
  }

  .active::after{
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid #000;
  }
`;

export default function QNAbtn({ name, showActive, handleSetShow }) {
  return (
    <StyledButton
      className={showActive ? 'active' : ''}
      onClick={() => handleSetShow(name)}
    >
      {' '}
      {name}
    </StyledButton>
  );
}
