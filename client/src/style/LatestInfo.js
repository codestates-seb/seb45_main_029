import styled from 'styled-components';

export const LatestInfoContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 65.625rem;
  height: 5.25rem;
  gap: 1.62rem;
  div {
    & button:not(:last-child) {
      width: 4.2rem;
      height: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-right: 1.37rem;
      background-color: var(--white);
      border: none;
    }
  }
`;
