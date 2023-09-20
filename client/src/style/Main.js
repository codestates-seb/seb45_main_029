import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  .title{
    font-size: 2.8125rem;
    font-weight: 500;
    text-align: center;
    margin: 3.125rem 0;

    >span{
      font-size: 3.625rem;
      font-family: var(--nanum);
      color: var(--blue);
    }
  }
  .main-title{
    font-size: 3.4375rem;
    font-weight: 400;
    margin: 0 0 1.875rem;
    >span{
      font-size: 6.5625rem;
      color: var(--blue);
      font-family: var(--nanum);
      margin: 0 .625rem 0 0;
    }
  }
  .main-sub-title{
    font-size: 3.4375rem;
    font-weight: 400;
    margin: 0 0 6.25rem;
    >span{
      color: var(--blue);
      font-family: var(--nanum);
      margin: 0 .625rem 0 0;
    }
  }
`;

export const InputContainer = styled.div`
  width: 50rem;
  margin: 0 auto 3.125rem;
  position: relative;
`;

export const InputDesign = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1.375rem;
  font-size: 2rem;
  font-family: var(--nanum);
  color: #333;
  border-radius: 20px;
  border: 1px solid #0C2139;
`;

export const ImageDesign = styled.img`
  right: 1.375rem;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  cursor: pointer;
`;

export const VideoTypeContainer = styled.div`
  display: flex;
  gap: 2.1875rem;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  padding: 0 0 1.25rem;

  &::-webkit-scrollbar{
    width: 5px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: var(--pink);
    border: 2px solid var(--white);
    border-radius: 12px 12px 12px 12px;
  }

`;

export const VideoType = styled.button`
  cursor: pointer;
  border: 1px solid var(--pink);
  border-radius: 15px;

  padding: 1.375rem 2rem;
  font-family: var(--nanum);
  font-size: 1.75rem;
  text-align: center;
  background-color: transparent;
  
`;
export const VideoTypeClicked = styled(VideoType)`
  background-color: var(--pink);
  color: var(--white);
`;

export const VideoTypeDetailContainer = styled.div`
  display: flex;
`;

export const VideoTypeDetail = styled.div`
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 1rem;
`;

export const VideoTypeDetailClicked = styled(VideoTypeDetail)`
  background-color: red;
`;
