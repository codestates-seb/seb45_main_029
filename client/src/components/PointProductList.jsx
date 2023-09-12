import Point from "../assets/point.svg"
import styled  from "styled-components";

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 9.375rem;
  row-gap: 4.6875rem;

  > li {
    width: calc(33.33% - 6.25rem);
    padding: 1.5625rem 1.5625rem .625rem;
    border: 1px solid #000;
    border-radius: 20px;
    text-align: center;
  }
  > li > figure{
    margin: 0 auto;
    height: 12.5rem;
    aspect-ratio: 1;
  }
  > li > figure > img{
    width: 100%;
    height: 100%;
  }
  .info_box{
    display: flex;
    justify-content: space-between;
    margin: 1.25rem 0 0;
  }
  .info_box .title{
    font-weight: 600;
    width: 9.375rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info_box .point{
    display: flex;
    align-items: center;
    gap: .3125rem;
  }
  .info_box .point > span{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail_view{
    border: 0;
    outline: none;
    background-color: transparent;
    font-size: 1.125rem;
    border-radius: 10px;
    margin: .625rem 0 0;
    padding: .625rem;
    cursor: pointer;
    transition: .3s all;
    &:hover{
      background-color: var(--pink);
      color: var(--white);
    }
  }
`

export default function PointProductList ({currentPosts, products }){
  return(
    <ProductList>
      {currentPosts && products.length > 0 ? (
        currentPosts.map((list , idx) => {
          return (
          <li key={idx}>
            <figure>
              <img src={list.image} alt={list.title} />
            </figure>
            <div className="info_box">
              <p className="title">{list.title}</p>
              <p className="point">{list.price}<span><img src={Point} alt="Point" /></span></p>
            </div>
            <button className="detail_view">자세히 보기</button>
          </li>
          )
      })
      ) : (
        <div> No posts.</div>
      )}
    </ProductList>
  )
}