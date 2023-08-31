import {
  NavAndContent,
  NavContainer,
  UserInfoOuterContainer,
  InfoContainer,
  UserImg,
  UserInfoPContainer,
  UserInfoP,
  UserHealthContainer,
  Line,
  VideoTitle,
  VideoContainer,
  BoardCotainer,
  QuestionBoardContainer,
  BoardTitle,
} from "../style/MyPage";
import MyPageNav from "../components/MyPageNav";

export default function MyPage() {
  return (
    <NavAndContent>
      <NavContainer>
        <MyPageNav />
      </NavContainer>
      <div>
        <UserInfoOuterContainer>
          <InfoContainer>
            <div>
              <p>나의 정보</p>
              <UserImg
                src="data:image/jpeg;base64,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"
                alt="myImage"
              />
            </div>
            <UserInfoPContainer>
              <UserInfoP>Email</UserInfoP>
              <UserInfoP>nickname</UserInfoP>
              <UserInfoP>motto</UserInfoP>
            </UserInfoPContainer>
          </InfoContainer>
          <UserHealthContainer>
            <p>나의 건강상태</p>
            <Line></Line>
            <span>허리디스크</span>
            <span>아파요</span>
          </UserHealthContainer>
        </UserInfoOuterContainer>
        <VideoTitle>
          <p>나의 영상</p>
          <p>전체</p>
          <hr></hr>
        </VideoTitle>
        <VideoContainer>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sYe-RMXn3KI?si=iAK8brD2HjQGwZ0N"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoContainer>
        <VideoTitle>
          <p>부위별</p>
          <hr></hr>
        </VideoTitle>
        <VideoContainer>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0ComdmFhE4k?si=5seAdHWRKVawSpKD"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoContainer>
        <VideoTitle>
          <p>직업별</p>
          <hr></hr>
        </VideoTitle>
        <VideoContainer>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xIx9wBI9il0?si=ygq9e4zRxY3SnzXJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoContainer>
        <BoardTitle>질문 답변</BoardTitle>
        <BoardCotainer>
          <QuestionBoardContainer>내가 한 질문</QuestionBoardContainer>
          <div>내가 한 답변</div>
        </BoardCotainer>
      </div>
    </NavAndContent>
  );
}
