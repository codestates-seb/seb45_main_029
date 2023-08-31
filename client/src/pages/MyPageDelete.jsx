import MyPageNav from "../components/MyPageNav";
import {
  NavAndContent,
  NavContainer,
  DeleteContainer,
  Title,
  WarningOuterContainer,
  WarningContainer,
  WarningPLeft,
  WarningPRight,
  InputAndButtonContainer,
} from "../style/MyPageDelete";

export default function MyPageDelete() {
  return (
    <NavAndContent>
      <NavContainer>
        <MyPageNav />
      </NavContainer>
      <DeleteContainer>
        <Title>탈퇴안내</Title>
        <div>회원탈퇴를 신청하기 전에 안내사항을 꼭 확인해주세요.</div>
        <div>
          사용하고 계신 이메일(sadwml@naver.com)을 탈퇴할 경우 재사용 및 복구가
          불가능합니다.
        </div>
        <div>탈퇴 후 회원정보 및 개인 서비스 이용기록이 모두 삭제됩니다.</div>
        <WarningOuterContainer>
          <WarningContainer>
            <WarningPLeft>
              <p>포인트</p>
            </WarningPLeft>
            <WarningPRight>
              <p>포인트 사용 및 사용기록 내용</p>
            </WarningPRight>
          </WarningContainer>
          <WarningContainer>
            <WarningPLeft>
              <p>콘텐츠</p>
            </WarningPLeft>
            <WarningPRight>
              <p>콘텐츠 저장 및 재활 치료 콘텐츠 시청금지</p>
            </WarningPRight>
          </WarningContainer>
          <WarningContainer>
            <WarningPLeft>
              <p>커뮤니티</p>
            </WarningPLeft>
            <WarningPRight>
              <p>커뮤니티 활동 및 게시글 삭제</p>
            </WarningPRight>
          </WarningContainer>
          <WarningContainer>
            <WarningPLeft>
              <p>동기부여</p>
            </WarningPLeft>
            <WarningPRight>
              <p>동기부여 활동 및 동기부여 기록 삭제</p>
            </WarningPRight>
          </WarningContainer>
        </WarningOuterContainer>
        <p>
          정말로 탈퇴하시겠습니까? 탈퇴를 희망하시면 공란에 탈퇴하기를
          적어주세요
        </p>
        <InputAndButtonContainer>
          <input type="text" placeholder="탈퇴하기" />
          <button>탈퇴하기</button>
        </InputAndButtonContainer>
      </DeleteContainer>
    </NavAndContent>
  );
}
