import styled from 'styled-components';

export const NavAndContent = styled.main`
    min-height: calc(100vh - 23.5625rem);
    > section{
      display: flex;
      gap: 6.25rem;
    }
    .content_section{
      width: calc(100% - 18.75rem);
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
    .bookmark_section .no_bookmark{
      text-align: center;
      padding: 3.75rem 0;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      font-size: 1.5rem;
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
    font-size: 1rem;
  }
`;

export const UserBold = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
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

  padding: 0 0 .9375rem;
  border-bottom: 1px solid #000;
`;

export const VideoContainer = styled.div`
  width: 92.5rem;
  display: flex;
  gap: 3.125rem;
`;

export const BoardCotainer = styled.div`
  display: flex;
  >div{
    width: 50%;
  }
`;

export const QuestionBoardContainer = styled.div`

`;

export const BoardTitle = styled.p`
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const Button = styled.button`
  all: unset;
  color: var(--blue);
  border-radius: 10px;
  border: 1px solid var(--blue);
  cursor: pointer;
  transition: .3s all;
  &:hover {
    background-color: var(--blue);
    color: #fff;
  }

  z-index: 10;
  width: 28px;
  height: 28px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 1.875rem 0;
  gap: .625rem;
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
`;
