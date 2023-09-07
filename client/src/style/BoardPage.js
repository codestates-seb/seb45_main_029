import { styled } from 'styled-components';

export const BoardMainContent = styled.div`
  display: flex;
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
export const BoardPageContainer = styled.div`
  width: 73.5rem;
  height: 56.25rem;
  display: flex;
  flex-direction: column;
`;

export const Topcontent = styled.div`
  display: flex;
  justify-content: space-between;
  .btn_top button:not(:last-child) {
    display: flex;
    justify-content: flex-start;
    margin-right: 1.37rem;
  }
`;

export const Line = styled.hr`
  width: 73.5rem;
  height: 0.0625rem;
  background: #848282;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.62rem;
  .search {
    position: relative;

    input {
      width: 65.625rem;
      height: 3.125rem;
      flex-shrink: 0;
      border-radius: 0.625rem;
      border: 1px solid #848282;
    }
    img {
      position: absolute;
      width: 1.5625rem;
      height: 1.5625rem;
      flex-shrink: 0;
      color: var(--blue);
    }
    button {
      width: 6.25rem;
      height: 3.125rem;
      flex-shrink: 0;
      border-radius: 0.625rem;
      background: var(--pink);
    }
  }
`;

export const SecondCotent = styled.div`
  display: flex;
  justify-content: space-between;
  .btn_secon {
    display: flex;
    justify-content: flex-end;
    margin-right: 13.75rem;
  }
`;
export const QuestionButton = styled.button`
  width: 6.25rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: var(--navy);

  color: var(--white);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
`;

export const DefaultB = styled.div`
  width: 7rem;
  display: inline-block;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const Button1 = styled(DefaultB)`
  background-color: ${(props) => props.color === 'first' && '#fff'};
`;

export const Button2 = styled(DefaultB)`
  background-color: ${(props) => props.color === 'second' && '#EAEAEA'};
`;

export const Button3 = styled(DefaultB)`
  background-color: ${(props) => props.color === 'third' && '#859DE8'};
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.3rem;
  padding-left: 6.5rem;

  margin-top .pagination {
    list-style: none;
    padding-bottom: 3.125rem;
    gap: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #3f2305;
    width: 46.25rem;
    height: 3.0625rem;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
  }
  .page_num {
    display: block;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    width: 6.25rem;
    padding: 0.625rem;
    cursor: pointer;
    text-align: center;

    &:hover {
      background: var(--blue);
      color: var(--white);
    }
  }
  .pagination > li {
  }
  .active {
    background: var(--blue);
    color: var(--white);
  }
`;
