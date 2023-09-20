import styled from 'styled-components';

export const NavAndContent = styled.div`
    min-height: calc(100vh - 23.5625rem);
    > section{
      display: flex;
      gap: 6.25rem;
    }
`;


export const DeleteContainer = styled.section`
  width: calc(100% - 18.75rem );

  >p{
    font-size: 18px;
  }
`;

export const Title = styled.h2`
  font-size: 2.375rem;
  margin: 0 0 1.5625rem;
`;
export const WarningOuterContainer = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: .9375rem 0 1.875rem;
`;

export const WarningContainer = styled.tbody`
  tr{
    border-top: 1px solid #848282;
    border-bottom: 1px solid #848282;
  }
  th{
    width: 30%;
    padding: .9375rem 0;
    font-size: 18px;
    border-right: 1px solid #848282;
  }
  td{
    padding: 0 2.5rem;
  }
`;

export const InputAndButtonContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  margin: .9375rem 0 0;
`;

export const InputButton = styled.button`
  cursor: pointer;
  width: 12.5rem;
  height: 5rem;
  background-color: #F56565;
  color: var(--white);
  font-family: var(--nanum);
  border: 0;
  border-radius: 15px;
  font-size: 32px;
`;

export const Input = styled.input`
  cursor: pointer;
  width: 60%;
  height: 3.125rem;
  padding: .9375rem;
  color: #9d9d9d;
  font-size: 1rem;
  border-radius: 10px;
`;
