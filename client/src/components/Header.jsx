import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { HeaderContainer, HeaderSection, HdNav } from '../style/Header.Styled';
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/userSlice';

const headerBtn = [
  { id: 1, text: '동기부여', path: '/point' },
  { id: 2, text: '로그인', path: '/signin' },
  { id: 3, text: '회원가입', path: '/signup' },
];

const loginHeaderBtn = [
  { id: 4, text: '동기부여', path: '/point' },
  { id: 5, text: '로그아웃', path: '/' },
  { id: 6, text: '마이페이지', path: '/mypage' },
];

function Header() {
  const userInfo = useSelector((state) => state.user);
  const [btn, setBtn] = useState(headerBtn);
  const dispatch = useDispatch();

  const logout = (id) => {
    if (id === 5) {
      dispatch(logoutUser());
      setBtn(headerBtn);
      window.localStorage.removeItem('info');
    }
  };

  useEffect(() => {
    if (userInfo.loggedIn) {
      setBtn(loginHeaderBtn);
    } else {
      setBtn(headerBtn);
    }
  }, [userInfo]);

  useEffect(() => {
    if (window.localStorage.getItem('info')) {
      setBtn(loginHeaderBtn);
    } else {
      setBtn(headerBtn);
    }
  }, []);

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
