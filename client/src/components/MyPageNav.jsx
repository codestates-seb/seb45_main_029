import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const LineHR = styled.hr`
  width: 6rem;
`;

const DefaultP = styled(Link)`
  width: 7rem;
  display: inline-block;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.4rem;
  cursor: pointer;
  text-decoration: none;
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
    <nav>
      <ColorLink color={color} to="/mypage">
        내 정보
      </ColorLink>
      <LineHR></LineHR>
      <ColorLink2 color={color} to="/myPageInfo">
        정보 수정
      </ColorLink2>
      <LineHR></LineHR>
      <ColorLink3 color={color} to="/mypageDelete">
        회원 탈퇴
      </ColorLink3>
      <LineHR></LineHR>
    </nav>
  );
}

MyPageNav.propTypes = { color: PropTypes.string.isRequired };
