// eslint-disable-next-line no-unused-vars
import  styled  from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 4.375rem;
    position: sticky;
    top: 0;
    background-color: var(--navy);
    z-index: 999;
`

export const HeaderSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const HdNav = styled.nav`
    .hd_nav{
        display: flex;
        gap: 44px;
    }
    .hd_nav li a{
        display: block;
        color: var(--white);
        font-weight: 500;
        font-size: 1rem;
        transition: .3s all;
        padding: .625rem .9375rem;
        border-radius: 10px;

        &:hover{
            background-color: var(--pink);
        }
        &.active{
            background-color: var(--pink);
            font-weight: 600;
        }
    }
`;
