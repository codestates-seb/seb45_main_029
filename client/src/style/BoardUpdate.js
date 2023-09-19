import styled from 'styled-components';

export const Line = styled.hr`
  width: 73.5rem;
  height: 0.0625rem;
  background: #828080;
`;

export const UpdateMainContent = styled.div`
  display: flex;
  margin-left: 10.75rem;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  .my-text {
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
    .btn1 {
      display: flex;
      justify-content: flex-end;
      float: right;
      margin-top: 1.5rem;
    }
    .btn2 {
      margin-left: 0.5rem;
    }
  }
`;
