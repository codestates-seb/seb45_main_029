import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.19rem;
  .search {
    position: relative;

    & input {
      width: 64.925rem;
      height: 3.125rem;
      flex-shrink: 0;
      border-radius: 0.625rem;
      border: 1px solid #848282;
      display: inline-block;
    }
    & img {
      right: 12%;
      position: absolute;
      cursor: pointer;
      top: 30%;
    }
    button {
      width: 6.25rem;
      height: 3.125rem;
      flex-shrink: 0;
      margin-left: 1.62rem;
      border-radius: 0.625rem;
      background: var(--pink);
    }
  }
`;
