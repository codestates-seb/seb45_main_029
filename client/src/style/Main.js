import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 45rem;
  position: relative;
`;

export const InputDesign = styled.input`
  width: 40rem;
  height: 4rem;
  border-radius: 10px;
`;

export const ImageDesign = styled.img`
  right: 12%;
  position: absolute;

  cursor: pointer;
`;

export const VideoTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoType = styled.div`
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 1rem;
  width: 5rem;
  height: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const VideoTypeClicked = styled(VideoType)`
  background-color: red;
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
