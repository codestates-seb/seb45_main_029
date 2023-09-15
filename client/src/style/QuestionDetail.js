import styled from 'styled-components';

export const DetailMainContent = styled.div`
  display: flex;
  margin-left: 10.75rem;
`;

export const Line = styled.hr`
  width: 73.5rem;
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

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.3rem;
  width: 73.5rem;
  height: 56.25rem;
`;

export const TitleContainer = styled.title`
  display: flex;
  flex-direction: column;
  margin-top: 5.33rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 73.5rem;
    height: 5.5rem;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  width: 73.5rem;
  height: 10rem;
  .author-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 73.5rem;

    &.author-time {
      display: flex;
      flex-direction: row;
      width: 15rem;
      height: 1rem;
      align-items: flex-start;
      font-size: 0.875rem;
      color: #828080;
      margin-bottom: 0.56rem;
    }
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
