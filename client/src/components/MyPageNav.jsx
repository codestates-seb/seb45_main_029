import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Aside = styled.aside`
  width: 12.5rem;
  max-height: 12.5rem;
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
`

const DefaultP = styled(Link)`
    font-size: 1.5625rem;
    transition: .3s all;
    &:hover{
      color: var(--blue);
    }
`;

const ColorLink = styled(DefaultP)`
  color: ${(props) => props.color === "first" && "#D7B9FC"};
`;

const ColorLink2 = styled(DefaultP)`
  color: ${(props) => props.color === "second" && "#D7B9FC"};
`;
const ColorLink3 = styled(DefaultP)`
  color: ${(props) => props.color === "third" && "#D7B9FC"};
`;

export default function MyPageNav({ color }) {
  return (
    <Aside>
      <ul className="nav">
        <li>
          <ColorLink color={color} to="/mypage">
            내 정보
          </ColorLink>
        </li>
        <li>
          <ColorLink2 color={color} to="/mypageInfo">
            정보 수정
          </ColorLink2>
        </li>
        <li>
          <ColorLink3 color={color} to="/mypageDelete">
            회원 탈퇴
          </ColorLink3>
        </li>
      </ul>
    </Aside>
  );
}

MyPageNav.propTypes = { color: PropTypes.string.isRequired };
