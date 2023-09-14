import { styled } from 'styled-components';

export const LoginContainer = styled.main`
  width: 100%;
  min-height: 70vh;
  padding: 6.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const LoginBox = styled.section`
  width: 37.5rem;
  height: 28.125rem;
  padding: 2.5rem 3.125rem;
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.25s ease-in-out;
  text-align: center;
  
  &:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  h2 {
    font-size: 1.375rem;
    padding: 0 0 .9375rem;
    border-bottom: 1px solid #000;
  }

  .input-container{
    margin: 1.5625rem auto 0;
    width: 90%;
  }
  .input-box{
    margin: 0 0 .9375rem;
  }
  .input-box input{
    width: 100%;
    height: 3.125rem;
    padding: .625rem;
    color: #838282;
    border-radius: 5px;
    border: 1px solid #838282;
    font-size: 1rem;
  }
  .error-message{
    color: #F56565;
    font-weight: 600;
    font-size: 1rem;
    text-align: left;
    margin: .625rem 0 0;
  }
  .buttons{
    width: 90%;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3.125rem;
  border-radius: 5px;
  margin-bottom: .625rem;
  background: var(--navy);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--white);
  transition: .3s;
  font-family: "Pretendard";

  &:hover{
    background-color: #032B58;
  }
`;

export const MyCustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3125rem;
  width: 100%;
  height: 3.125rem;
  border-radius: 5px;
  border: 1px solid var(--navy);
  cursor: pointer;
  transition: .3s;
  font-family: "Pretendard";
  background-color: var(--white);

  >span{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover{
    background-color: #F3F3F3;
  }
`;
