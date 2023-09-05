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
  display: inline-block;
  width: 40rem;
  height: 4rem;
  border-radius: 10px;
`;

export const ImageDesign = styled.img`
  right: 12%;
  position: absolute;
  top: 30%;
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
  width: 10rem;
  height: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
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
`;

function Main() {
  return (
    <MainContainer>
      <InputContainer>
        <InputDesign placeholder='검색하기' />
        <ImageDesign src='/images/magnify.png' alt='magnifier' />
      </InputContainer>
      <p>로그인하여 여러분들만의 </p>
      <p>맞춤 운동 동영상을 확인해보세요</p>
      <h1>TOP5 재활운동</h1>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/xIx9wBI9il0?si=ygq9e4zRxY3SnzXJ'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
      <p>부위별 운동 확인하기</p>
      <VideoTypeContainer>
        <VideoType>전체</VideoType>
        <VideoType>부위별</VideoType>
        <VideoType>직업별</VideoType>
      </VideoTypeContainer>
      <VideoTypeDetailContainer>
        <VideoTypeDetail>사무직</VideoTypeDetail>
        <VideoTypeDetail>현장직</VideoTypeDetail>
        <VideoTypeDetail>개발직</VideoTypeDetail>
      </VideoTypeDetailContainer>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/xIx9wBI9il0?si=ygq9e4zRxY3SnzXJ'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </MainContainer>
  );
}
export default Main;
