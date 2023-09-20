import styled from 'styled-components';

export const NavAndContent = styled.main`
    min-height: calc(100vh - 23.5625rem);
    > section{
      display: flex;
      gap: 5.9375rem;
    }
    .content_section{
      width: calc(100% - 12.5rem);
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }
    h2{
      font-size: 3rem;
      font-weight: 300;
      font-family: var(--nanum);
      margin: 0 0 1.5625rem;
    }
`;
export const UserInfoOuterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 6.25rem;
`;

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  gap: .625rem;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 100%;
`;

export const UserInfoPContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .625rem;

  >div{
    display: flex;
    gap: 1.25rem;
  }
  p{
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

export const UserBold = styled.span`
  font-weight: 600;
`;

export const UserHealthContainer = styled.div`
  width: 50%;

  h3{
    font-size: 1.375rem;
    font-weight: 500;
    padding: 0 0 1.25rem;
    border-bottom: 1px solid #000;
  }
  p{
    padding: 1.25rem 0 0;
    font-size: 1rem;
  }
`;





export const VideoTitle = styled.div`
  /* margin-left: 22rem; */
`;

export const VideoContainer = styled.div`
  /* margin-left: 22rem; */
  width: 95rem;
  display: flex;
`;

export const BoardCotainer = styled.div`
  display: flex;
`;

export const QuestionBoardContainer = styled.div`
  margin-right: 30rem;
`;

export const BoardTitle = styled.p`
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const Button = styled.div`
  all: unset;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
  z-index: 10;
  width: 2rem;
  height: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1em;
`;
export const VideoAndButtonContainer = styled.div`
  display: flex;
  width: 95rem;
  overflow: hidden;
`;

export const VideoContainerFlexWrap = styled.div`
  /* margin-left: 22rem; */
  width: 95rem;
  height: 34.2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const VideoAndButtonContainerFlexWrap = styled.div`
  display: flex;
  width: 95rem;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainerOuter = styled.div`
  display: flex;
`;

export const TitleFontSpanBlue = styled.span`
  color: var(--blue);
`;

export const TitleFontSpanPink = styled.span`
  color: var(--pink);
`;

export const TitleFontSpanBlack = styled.span`
  font-family: var(--nanum);
  font-size: 2rem;
  color: var(--black);
`;
