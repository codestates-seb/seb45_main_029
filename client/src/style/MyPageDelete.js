import styled from "styled-components";

export const NavContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  position: absolute;
  left: 8rem;
  top: 6rem;
`;

export const DeleteContainer = styled.div`
  margin-left: 22rem;
`;

export const Title = styled.div`
  font-size: 3rem;
`;

export const WarningContainer = styled.div`
  display: flex;
  width: 35rem;
  height: 3rem;
`;

export const WarningPLeft = styled.div`
  width: 20rem;
  border: 1px solid gray;
  border-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WarningPRight = styled.div`
  width: 30rem;
  border: 1px solid gray;
  border-right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WarningOuterContainer = styled.div`
  margin-top: 1rem;
`;

export const InputAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
`;
