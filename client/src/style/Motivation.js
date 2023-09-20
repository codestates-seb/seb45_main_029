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
  .loading-box{
    text-align: center;
    padding: 1.25rem;
  }
  h3{
    font-size: 2.625rem;
    font-family: var(--nanum);
    color: var(--blue);
  }
`

export const MotivationPages = styled.div`
  width: 100%;
  height: 62.5rem;
  border: 1px solid #414141;
  border-radius: 20px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `

  export const MotivaionFormBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.875rem;

    input{
      width: calc(100% - 12.5rem);
      border: 1px solid #414141;
      border-radius: 20px;
      height: 3.75rem;
      padding: 1.25rem;
      font-size: 1.625rem;
      font-family: var(--nanum);
    }
    button{
      width: 9.375rem;
      height: 3.75rem;
      border: 0;
      background-color: var(--navy);
      border-radius: 20px;
      color: var(--white);
      font-size: 1rem;
      transition: .3s all;
      cursor: pointer;

      &:hover{
        background-color: #09305E;
      }
    }
  `