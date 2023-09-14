import { styled, css } from 'styled-components';

export const Button = styled.button`
  width: 12.5rem;
  height: 3.75rem;
  border-radius: 15px;
  background: var(--navy);
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.375rem;
  font-weight: 400;
  transition: .3s;
  cursor: pointer;

  &:hover{
    background-color: #032B58;
  }

  ${(props) =>
    props.primay &&
    css`
      border: none;
      background: rgba(12, 33, 57, 1);
      color: #fff;
    `}
`;
