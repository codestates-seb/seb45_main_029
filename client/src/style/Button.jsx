import { styled, css } from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 15px;
  background: #0c2139;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 22px;
  font-weight: 400;

  cursor: pointer;

  ${(props) =>
    props.primay &&
    css`
      border: none;
      background: rgba(12, 33, 57, 1);
      color: #fff;
    `}
`;
