import styled from "styled-components";
import Pagination from "react-js-pagination"

const PaginationDiv = styled.div`
  margin: 6.25rem 0 0;

  .pagination{
    display: flex;
    justify-content: center;
    gap: .9375rem;
  }
  .pagination li{
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 50%;

    &.active,
    &:hover{
      background-color: var(--blue);
    }
    &.active a,
    &:hover a{
      color: var(--white);
    }
  }
  .pagination li a {
    color: #3F2305;
  }
`
const Paging = ({page, count, setPage}) => {
  return (
    <PaginationDiv>
      <Pagination
        activePage={page}
        itemsCountPerPage={6}
        totalItemsCount={count}
        pageRangeDisplayed={6}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setPage}
      />
    </PaginationDiv>
  )
}

export default Paging