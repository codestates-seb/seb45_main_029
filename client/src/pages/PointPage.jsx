import { useState , useEffect } from "react";
import MotivationNav from "../components/MotivationNav";
import PointProductList from "../components/PointProductList";
import { Container, ContainerSection, ProductList } from "../style/PointPage";
import axios from "axios";


const infotext = [
  {id : 1, text : "포인트로 구매하신 상품은 환불하실 수 없습니다.", num: 1},
  {id : 2, text : "부가가치세는 별도로 내셔야 합니다.", num: 2},
  {id : 3, text : "택배비는 별도입니다.", num: 3}
]

function PointPage () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error("에러 발생 : ", error);
    });
  }, []);

  return (
    <main className="point_section">
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
                <p>현재 잔여 포인트 : <span>2000</span></p>
              </div>
            </div>
          </ContainerSection>
        </Container>
        <ProductList>
          <PointProductList products={products}/>
        </ProductList>
      </section>
    </main>
  )
}

export default PointPage;