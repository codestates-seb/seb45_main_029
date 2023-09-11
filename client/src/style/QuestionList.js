import styled from 'styled-components';

export const QuestionContainer = styled.div`
  box-sizing: border-box;
  width: 73.5rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerTitle = styled.title`
  width: 12.313rem;
  height: 1.1875rem;
  color: #000;
  text-align: center;
  font-size: 1rem;

  font-weight: 600;

  margin-bottom: 1.37rem;
`;

export const Line = styled.hr`
  width: 40rem;
`;

export const ContentCard = styled.div`
  .question-message {
    display: flex;

    align-items: flex-start;
    color: #000;
    text-align: center;

    font-size: 0.875rem;

    font-weight: 500;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .wrapper {
    display: flex;
    align-items: center;
    gap: 0.62rem;
    &.wrapper > div {
      color: #000;
      text-align: center;
      font-size: 0.75rem;

      font-weight: 500;

      width: 2.125rem;
      height: 1rem;
    }
  }

  .icon-count {
    display: flex;
    gap: 0.63rem;
    & > div {
    }
  }
`;
