import styled from "styled-components";

export const NavContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid gray;
  border-radius: 1rem;
  margin-left: 5rem;
  margin-top: 5rem;
  margin-right: 15rem;
`;

export const UserInfoContainer = styled.div`
  border-radius: 12%;
  border: 1px solid gray;
  width: 45rem;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const PainChoice = styled.div`
  display: flex;
`;

export const PainLabel = styled.label`
  margin-right: 1rem;
`;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const UserInfoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
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
  width: 25rem;
`;

export const EditButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const NavAndContent = styled.article`
  display: flex;
`;

export const InfoTitle = styled.p`
  font-weight: bold;
  margin-top: 3rem;
  margin-right: 30rem;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

export const TitleAndPic = styled.div`
  display: flex;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputButton = styled.input`
  display: none;
`;

export const LabelForInput = styled.label`
  cursor: pointer;
`;
