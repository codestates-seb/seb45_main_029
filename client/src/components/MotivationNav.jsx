import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
  {id: 1, text:"포인트 상점", path : "/point"},
  {id: 2, text:"나의 다짐", path : "/"},
  {id: 3, text:"질문답변", path : "/boardpage"},
]

const Aside = styled.aside`
  width: 12.5rem;
  border: 1px solid #9A9A9A;
  border-radius: 25px;
  padding: 1.25rem;
  font-family: var(--nanum);

  ul{
    display: flex;
    flex-direction: column;
  }
  ul > li:first-child{
    padding: 0 0 .625rem;
  }
  ul > li{
    padding: 1.25rem 0 .625rem;
    border-bottom: 1px solid #9A9A9A;
  }
  ul > li > a{
    font-size: 1.5625rem;
    transition: .3s all;
    &.active {
      color: var(--pink);
    }
    &:hover{
      color: var(--blue);
    }
  }
  
`

export default function MotivationNav(){

  const Preparing = (id) => {
    if(id === 2){
      alert("페이지 준비중입니다.")
    }
  }

  return(
    <Aside>
      <ul className="nav">
        {links.map((link) => {
          const {id, text, path} = link;
          return(
            <li key={id}>
              <NavLink to={path} className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => Preparing(id)}>
                {text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </Aside>
  )
}