import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.svg"
import {HeaderContainer,HeaderSection,HdNav} from '../style/Header.Styled';
// eslint-disable-next-line no-unused-vars

const headerBtn = [
    {id: 1, text:"동기부여" , path:"/point"},
    {id: 2, text:"로그인" , path:"/signin"},
    {id: 3, text:"회원가입" , path:"/signup"},
]


function Header () {
    return (
        <HeaderContainer>
            <HeaderSection className='container_wt'>
                <h1>
                    <Link to='/'>
                        <img src={logo} alt="LOGO" />
                    </Link>
                </h1>
                <HdNav>
                    <ul className='hd_nav'>
                        {headerBtn.map((list) => {
                            const {id, text, path} = list;
                            return(
                                <li key={id}>
                                    <NavLink to={path} className={({isActive}) => isActive ? "active" : ""}>
                                        {text}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </HdNav>
            </HeaderSection>
        </HeaderContainer>
    );
}

export default Header;