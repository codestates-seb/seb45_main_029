import { styled } from 'styled-components';

export const BoardMainContent = styled.div`
  display: flex;
  margin-left: 10.75rem;
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
export const BoardPageContainer = styled.div`
  width: 73.5rem;
  height: 56.25rem;
  display: flex;
  flex-direction: column;
  margin-top: 5.3rem;
`;

export const Topcontent = styled.div`
  display: flex;
  gap: 1.37rem;
`;

export const Line = styled.hr`
  width: 73.5rem;
  height: 0.0625rem;
  background: #848282;
`;

export const SecondContent = styled.div`
  display: flex;
  justify-content: space-between;
  .btn_secon {
    display: flex;
    justify-content: flex-end;
  }
`;
export const QuestionButton = styled.button`
  width: 6.25rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: var(--navy);

  color: var(--white);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.3rem;
  padding-left: 6.5rem;

  margin-top: 3rem;
`;
