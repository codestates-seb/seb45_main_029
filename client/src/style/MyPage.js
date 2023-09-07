import styled from 'styled-components';

export const NavAndContent = styled.div`
  display: flex;
`;

export const NavContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid gray;
  border-radius: 1rem;
  margin-left: 5rem;
  margin-top: 5rem;
  margin-right: 5rem;
`;

export const InfoContainer = styled.div`
  margin-top: 5rem;
  display: flex;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

export const UserInfoPContainer = styled.div`
  margin-left: 1rem;
  margin-top: 2rem;
`;

export const UserInfoP = styled.p`
  margin-top: 1em;
`;

export const UserSpan = styled.span`
  margin-right: 1em;
`;

export const UserInfoOuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const UserHealthContainer = styled.div`
  margin-top: 7rem;
  margin-left: 16rem;
`;

export const Line = styled.hr`
  width: 25rem;
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
  font-family: var(--nanum);
  color: var(--blue);
  font-size: 2rem;
`;

export const TitleFontSpanPink = styled.span`
  font-family: var(--nanum);
  color: var(--pink);
  font-size: 2rem;
`;

export const TitleFontSpanBlack = styled.span`
  font-family: var(--nanum);
  font-size: 2rem;
  color: var(--black);
`;
