import { useSelector, useDispatch } from 'react-redux';
import MyPageNav from '../components/MyPageNav';
import {
  NavAndContent,
  DeleteContainer,
  Title,
  WarningOuterContainer,
  WarningContainer,
  InputAndButtonContainer,
  InputButton,
  Input,
} from '../style/MyPageDelete';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { deleteUser, setUser } from '../redux/userSlice';
import { useEffect } from 'react';

export default function MyPageDelete() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  console.log(userInfo.email)
  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem('info'));
    if (info) dispatch(setUser(info));
  }, [dispatch]);

  const onSubmitDelete = async (e) => {
    e.preventDefault();
    if (e.target[0].value === '탈퇴하기') {
      try {
        await axios.delete(
          `${import.meta.env.VITE_SERVER_URL}/users/${userInfo.userId}`,
          {
            headers: { Authorization: `Bearer ${userInfo.accessToken || ''}` },
          }
        );
        window.localStorage.removeItem('info');
        dispatch(deleteUser());
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <NavAndContent>
      <section className='content_pd container_wt'>
        <MyPageNav color='third' />
        <DeleteContainer>
          <Title>탈퇴안내</Title>
          <p>회원탈퇴를 신청하기 전에 안내사항을 꼭 확인해주세요.</p>
          <br />
          <p>
            사용하고 계신 이메일을 탈퇴할 경우 재사용 및 복구가
            불가능합니다.
          </p>
          <br /><br />
          <p>탈퇴 후 회원정보 및 개인 서비스 이용기록이 모두 삭제됩니다.</p>
          <WarningOuterContainer>
            <WarningContainer>
              <tr>
                <th>포인트</th>
                <td>포인트 및 사용기록 내역</td>
              </tr>
              <tr>
                <th>콘텐츠</th>
                <td>콘텐츠 저장 및 재활 치료 콘텐츠 시청금지</td>
              </tr>
              <tr>
                <th>커뮤니티</th>
                <td>커뮤니티 활동 및 게시글 삭제</td>
              </tr>
              <tr>
                <th>동기부여</th>
                <td>동기부여 활동 및 동기부여 기록 삭제</td>
              </tr>
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
      </section>
    </NavAndContent>
  );
}
