import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    width: 73.5rem;

    .title-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 22rem;
      height: 16.6rem;
      margin-bottom: 1.25rem;
      &.title > input {
        width: 50rem;
        height: 12rem;
      }
      &.author-date {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        font-size: 0.875rem;
        color: #828080;
        margin-bottom: 1.56rem;
      }
    }

    .author-content {
      height: 25rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .btn1 {
    }
  }
`;
