import styled from "styled-components";

export const Motivation = styled.main`
  min-height: calc(100vh - 23.5625rem);
  > section{
      display: flex;
      gap: 6.25rem;
    }
`

export const MotivationSection = styled.section`
  width: calc(100% - 18.75rem);

  h2{
    font-size: 3rem;
    font-weight: 400;
    font-family: var(--nanum);
    margin: 0 0 3.125rem;
    text-align: center;

    > span{
      color: var(--blue);
    }
  }
`

export const MotivationPages = styled.div`
  width: 100%;
  height: 62.5rem;
  border: 1px solid #414141;
  border-radius: 20px;
  `