import styled from 'styled-components';

export const Line = styled.hr`
  width: 73.4375rem;
  height: 0.0625rem;
  background: #828080;
`;

export const NavContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid gray;
  border-radius: 1rem;
  margin-left: 5rem;
  margin-top: 5rem;
  margin-right: 5rem;
`;
export const QuestionDetailContainer = styled.div`
  display: flex;
`;
export const DetailContent = styled.div`
  width: 73.5rem;
  height: 56.25rem;
  display: flex;
  flex-direction: column;
  margin-top: 5.33rem;
`;

export const SmallButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #0c2139;
  cursor: pointer;
  background-color: var(--white);
  &:hover {
    background-color: var(--pink);
  }
`;
