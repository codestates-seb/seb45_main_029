import { useState , useEffect } from "react";
import MotivationNav from "../components/MotivationNav";
import PointProductList from "../components/PointProductList";
import PointPagination from "../components/PointPagination"
import {PointSection, Container, ContainerSection, ProductList } from "../style/PointPage";
import axios from "axios";

// const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const infotext = [
  {id : 1, text : "포인트로 구매하신 상품은 환불하실 수 없습니다.", num: 1},
  {id : 2, text : "부가가치세는 별도로 내셔야 합니다.", num: 2},
  {id : 3, text : "택배비는 별도입니다.", num: 3}
]

function PointPage () {
  const [products, setProducts] = useState([]);  // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(6); // 한 페이지에 보여질 아이템 수 
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    // axios.get(`${SERVER_URL/product?page=1&size=10}`)
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error("에러 발생 : ", error);
    });
    setCount(products.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfLastPost, indexOfFirstPost, products, postPerPage]);

  const setPage = (error) => {
    setCurrentPage(error);
  };

  return (
    <PointSection>
      <section className="content_pd container_wt">
        <Container>
          <MotivationNav/>
          <ContainerSection>
            <h2><span>포인트</span> 상점</h2>
            <div className="content_box">
              <div className="info_box">
                <p className="info_title">이용안내</p>
                <ul>
                  {infotext.map((info) => {
                    const {id, text, num} = info;
                    return(
                      <li key={id}>
                        <span>{num}</span>
                        <p>{text}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="point_box">
                <p>포인트 : <span>준비중</span></p>
              </div>
            </div>
          </ContainerSection>
        </Container>
        <ProductList>
          <PointProductList products={products} currentPosts={currentPosts}/>
        </ProductList>
        <PointPagination page={currentPage} count={count} setPage={setPage}   />
      </section>
    </PointSection>
  )
}

export default PointPage;