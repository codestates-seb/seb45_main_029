import { styled } from 'styled-components';

export const BoardMainContent = styled.main`
    min-height: calc(100vh - 23.5625rem);

    > section{
      display: flex;
      gap: 3.125rem;
    }
`;

export const BoardPageContainer = styled.section`
  width: calc(100% - 15.625rem);
  display: flex;
  flex-direction: column;
`;

export const Topcontent = styled.div`
  display: flex;
  gap: 1.375rem;
  padding: 0 0 .9375rem;
  border-bottom: 1px solid #848282;
`;

export const SecondContent = styled.div`
  padding: 0 0 .625rem;
  border-bottom: 1px solid #848282;
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

export const PaginationDiv = styled.div`
  margin: 6.25rem 0 0;

  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.9375rem;
  }
  .pagination li {
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 50%;

    &.active,
    &:hover {
      background-color: var(--blue);
    }
    &.active a,
    &:hover a {
      color: var(--white);
    }
  }
  .pagination li a {
    color: #3f2305;
  }
`;
