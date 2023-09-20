import styled from "styled-components";

const LoadingText = styled.p`
  width: 100%;
  font-size: 1.75rem;
  text-align: center;
  font-family: var(--nanum);
`

export default function Loading() {
  return (
    <>
      <LoadingText>Loading 중입니다.</LoadingText>
    </>
  );
}
