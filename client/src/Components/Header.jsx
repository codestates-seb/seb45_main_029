

import { useNavigate } from "react-router-dom";
import {HeaderContainer,LogoContainer,HGruop,HButton } from './Header.Styled';


function Header () {
    const navigate = useNavigate();

    const Main = () => {
        navigate('/');
    }
   
    const boardpage = () => {
        navigate('/boardpage');
    }
    const signup = () => {
        navigate('/signup');
    }
    const signin = () => {
        navigate('/signin');
    }
    return (
        <HeaderContainer>
       
            <LogoContainer onClick={Main}>
                <div>
                <div className="title">Rehabilitation</div>
                    <img src="/images/logo.png" alt="LOGO" />
                    </div>
                    </LogoContainer>
            <HGruop>
                <HButton onClick={boardpage}>동기부여</HButton>
                <HButton onClick={signin}>로그인</HButton>
                <HButton onClick={signup}>회원가입</HButton>
                <HButton onClick={boardpage}>동기부여</HButton>
            
        </HGruop>
        </HeaderContainer>
    );
}

export default Header;