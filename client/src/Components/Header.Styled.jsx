// eslint-disable-next-line no-unused-vars
import  styled  from 'styled-components';

export const HeaderContainer = styled.Header`
display: flex;
width: 120rem;
height: 4.375rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
background-color:rgba(12, 33, 57, 1);
`;

export const LogoContainer = styled.div`
width: 4.375rem;
height: 1.875rem;
flex-shrink: 0;
&.title {
    color:rgba(255, 255, 255, 1);
}
& img {
    width: 2.30356rem;
height: 1.875rem;
flex-shrink: 0;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
background:lightgray 50% / cover no-repeat;
}
`
export const HGruop = styled.div`
display: flex;
`;
export const HButton = styled.button`
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
color:rgba(255, 255, 255, 1);
`;