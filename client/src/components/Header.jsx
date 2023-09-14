import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { HeaderContainer, HeaderSection, HdNav } from '../style/Header.Styled';
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars

const headerBtn = [
  { id: 1, text: '동기부여', path: '/point' },
  { id: 2, text: '로그인', path: '/signin' },
  { id: 3, text: '회원가입', path: '/signup' },
];

const loginHeaderBtn = [
  { id: 1, text: '동기부여', path: '/point' },
  { id: 2, text: '로그아웃', path: '/' },
  { id: 3, text: '마이페이지', path: '/mypage' },
];

function Header() {
  const [btn, setBtn] = useState([]);
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
          <Link to='/'><img src={logo} alt='LOGO' /></Link>
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
