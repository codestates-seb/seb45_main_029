import styled from 'styled-components';

export const SearchBox = styled.div`
  margin: 1.5625rem 0 2.5rem;

  .search {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5625rem;

    .input-box{
      width: calc(100% - 7.8125rem);
      position: relative;
    }
    & input {
      width: 100%;
      padding: .9375rem 3.125rem;
      font-size: 1.5rem;
      font-family: var(--nanum);
      height: 3.75rem;
      border-radius: 10px;
      border: 1px solid #848282;
    }
    & img {
      left: .75rem;
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
      cursor: pointer;
    }
    button {
      width: 6.25rem;
      height: 3.75rem;
      border: 0;
      border-radius: 10px;
      background: var(--pink);
      color: var(--white);
      transition: .3s all;
      cursor: pointer;

      &:hover{
        background-color: #BA90ED;
      }
    }
  }
`;
