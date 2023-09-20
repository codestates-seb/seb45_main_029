import styled from 'styled-components';

export const NavAndContent = styled.main`
  min-height: calc(100vh - 23.5625rem);

  > section{
      display: flex;
      gap: 6.25rem;
    }
`;

export const OuterContainer = styled.div`
  width: calc(100% - 18.75rem);
  display: flex;

  >article{
    width: 56.25rem;
    border-radius: 35px;
    border: 1px solid #9A9A9A;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const UserInfoContainer = styled.div`
  padding: 1.25rem 3.125rem;
  height: 100%;
`;

export const UserInfoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  margin: 0 0 .9375rem;
`;

export const TitleAndPic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .input_box{
    width: 60%;

    p{
      font-size: 1.125rem;
      margin: .625rem 0;
    }
  }
`;

export const WarningP = styled.span`
  display: block;
  margin: .3125rem 0 0;
  color: #FF0000;
  font-size: .875rem;
`;

export const InputDesign = styled.input`
  height: 2.5rem;
  border-radius: 20px;
  padding: .3125rem .625rem;
  width: 100%;
  font-size: 1rem;
`;


export const PainChoice = styled.div`
  display: flex;
  height: 4rem;
`;

export const JobChoice = styled.div`
  display: flex;
  height: 4rem;
  font-size: 0.5rem;
`;

export const PainLabel = styled.label`
  margin-right: 1rem;
`;



export const ArticleList = styled.div`
  display: flex;
`;


export const Line = styled.hr`
  width: 40rem;
`;

export const SelectButton = styled.button`
  width: 3rem;
`;

export const SelectButtonContainer = styled.div`
  margin-top: 5rem;
  text-align: right;
`;

export const EditButton = styled.button`
  width: 12.5rem;
  background-color: var(--navy);
  color: var(--white);
  padding: .9375rem 0;
  border-radius: 1.25rem;
  font-size: 2rem;
  font-family: var(--nanum);
  transition: .3s;
  cursor: pointer;
  &:hover{
    background-color: #183556;
  }

`;

export const EditButtonContainer = styled.div`
  text-align: center;
`;


export const UserImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 100%;
`;



export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .3125rem;
`;


export const InputButton = styled.input`
  display: none;
`;

export const LabelForInput = styled.label`
  cursor: pointer;
  font-size: 1rem;
`;

export const PainListContainer = styled.div`
  display: flex;
`;

export const PainSpan = styled.span`
  margin-top: 1em;
  margin-bottom: 1em;
  color: blue;
`;


