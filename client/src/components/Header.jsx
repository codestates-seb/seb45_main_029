import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { HeaderContainer, HeaderSection, HdNav } from '../style/Header.Styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, setUser } from '../redux/userSlice';

const headerBtn = [
  { id: 1, text: '동기부여', path: '/point' },
  { id: 2, text: '회원가입', path: '/signup' },
  { id: 3, text: '로그인', path: '/signin' },
];

const loginHeaderBtn = [
  { id: 4, text: '동기부여', path: '/point' },
  { id: 5, text: '마이페이지', path: '/mypage' },
  { id: 6, text: '로그아웃', path: '/' },
];

function Header() {
  const userInfo = useSelector((state) => state.user);
  const [btn, setBtn] = useState(headerBtn);
  const dispatch = useDispatch();
  const info = window.localStorage.getItem('info');

  useEffect(() => {
    const info = window.localStorage.getItem('info');
    if (info) {
      dispatch(setUser(info));
    } else {
      dispatch(logoutUser());
    }
  }, []);

  const logout = (id) => {
    if (id === 6) {
      dispatch(logoutUser());
      setBtn(headerBtn);
      window.localStorage.removeItem('info');
    }
  };

  useEffect(() => {
    if (userInfo.loggedIn === true) {
      setBtn(loginHeaderBtn);
    } else {
      setBtn(headerBtn);
    }
  }, [userInfo, info]);

  return (
    <HeaderContainer>
      <HeaderSection className='container_wt'>
        <h1>
          <Link to='/'>
            <img src={logo} alt='LOGO' />
          </Link>
        </h1>
        <HdNav>
          <ul className='hd_nav'>
            {btn.map((list) => {
              const { id, text, path } = list;
              return (
                <li key={id}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => logout(id)}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </HdNav>
      </HeaderSection>
    </HeaderContainer>
  );
}

export default Header;
