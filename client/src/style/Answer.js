import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 73.5rem;
  height: 19.75rem;

  .title-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 73.5rem;
    height: 5.5rem;
  }
  &.author-date {
    display: flex;
    flex-direction: row;
    width: 15rem;
    height: 1rem;
    align-items: flex-start;
    font-size: 0.875rem;
    color: #828080;
    margin-bottom: 0.56rem;
  }

  .author-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 73.5rem;
    height: 10rem;
  }
  .btn1 {
    display: flex;
    justify-content: flex-end;
    float: right;
    margin-top: 1.5rem;
  }
  .btn2 {
    margin-left: 0.5rem;
  }
`;
