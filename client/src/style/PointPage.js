import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    gap: 3.125rem;
    align-items: flex-start;
`

export const ContainerSection = styled.section`
  width: calc(100% - 12.5rem);

  h2{
    font-size: 3rem;
    font-family: var(--nanum);
    margin: 0 0 3.125rem;
  }
  h2 > span{
    color: var(--blue);
  }
  .content_box{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .info_title{
    font-size: 25px;
    font-weight: 400;
    margin: 0 0 1.875rem;
  }
  .info_box ul{
    display: flex;
    flex-direction: column;
    gap: .8125rem;
    padding: 0 0 0 .625rem;
  }
  .info_box ul li{
    display: flex;
    gap: .625rem;
    font-family: var(--nanum);
    font-size: 1.75rem;
  }
  .point_box{
    font-family: var(--nanum);
    font-size: 1.75rem;
  }
`
export const ProductList = styled.section`
  margin: 3.75rem 0 0;
`