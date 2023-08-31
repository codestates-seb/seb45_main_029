import styled from "styled-components";

const LineHR = styled.hr`
  width: 6rem;
`;

const ContentP = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export default function MyPageNav() {
  return (
    <nav>
      <ContentP>내 정보</ContentP>
      <LineHR></LineHR>
      <ContentP>정보 수정</ContentP>
      <LineHR></LineHR>
      <ContentP>회원 탈퇴</ContentP>
      <LineHR></LineHR>
    </nav>
  );
}
