import { useSelector, useDispatch } from 'react-redux';
import MyPageNav from '../components/MyPageNav';
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
  InputButton,
  Input,
} from '../style/MyPageDelete';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../redux/userSlice';

export default function MyPageDelete() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const onSubmitDelete = async (e) => {
    e.preventDefault();
    if (e.target[0].value === '탈퇴하기') {
      console.log('hey');
      const data = await axios.delete(
        `${import.meta.env.SERVER_URL}/users/${userInfo.userId}`,
        { headers: { Authorization: userInfo.accessToken } }
      );
      dispatch(deleteUser);
      console.log(data);
      navigate('/');
    }
  };

  return (
    <NavAndContent>
      <NavContainer>
        <MyPageNav color='third' />
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
        <InputAndButtonContainer onSubmit={onSubmitDelete}>
          <Input type='text' placeholder='탈퇴하기' />
          <InputButton type='submit'>탈퇴하기</InputButton>
        </InputAndButtonContainer>
      </DeleteContainer>
    </NavAndContent>
  );
}
