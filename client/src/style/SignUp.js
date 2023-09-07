import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 600px;
  gap: 30px;
  width: 900px;
  height: 1000px;
  border-radius: 35px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  h1 {
    display: flex;
    align-items: center;
    color: #000;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 800px;
      height: 1px;
      border-bottom: 2px solid black;
    }
  }
  .title {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  input[type='text'],
  input[type='password'] {
    width: 734px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
  }
  .btn {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-color: rgba(133, 157, 232, 1);
    color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin-left: 26px;
  }
  .error-message {
    width: 370px;
    color: #f00;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const PainChoice = styled.div`
  display: flex;
  height: 4rem;
`;

export const JobChoice = styled.div`
  display: flex;
  height: 4rem;
  font-size: 0.5rem;
`;

export const PainLabel = styled.label`
  margin-right: 1rem;
`;

export const Line = styled.hr`
  width: 40rem;
`;

export const PainListContainer = styled.div`
  display: flex;
`;

export const PainSpan = styled.span`
  margin-top: 1em;
  margin-bottom: 1em;
  color: blue;
`;
