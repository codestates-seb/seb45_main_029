// eslint-disable-next-line no-unused-vars
import  styled  from 'styled-components';

export const HeaderContainer = styled.header`
display: grid;
grid-auto-flow: column;
grid-template-columns: 1fr;
width: 120rem;
height: 4.375rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
background-color:rgba(12, 33, 57, 1);

`;

export const LogoContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 4.375rem;
height: 1.875rem;
flex-shrink: 0;
padding-left: 13.75rem;
background:url("/images/removebg.png"),50% / cover no-repeat;

.title {
    position: absolute;
    transform: translate(-50%,-50%);
    width: 4.375rem;
    color: #FFF;
font-family: Nanum Pen Script;
font-size: .875rem;
font-style: normal;
font-weight: 400;
line-height: normal;

}

 img {
    position: absolute;
width: 37px;
height: 30px;
flex-shrink: 0;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
transform: translate(-50%,-50%);
}
`
export const HGruop = styled.div`
display: flex;
gap: 2.5rem;
padding-right: 13.75rem;

`;

export const HButton = styled.button`
background-color:transparent; 
text-align: center;
font-family: Pretendard;
font-size: .875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
color:rgba(255, 255, 255, 1);
border: none;

&:active {
    font-weight: bold;
    color: rgba(97, 135, 255, 1);
}
`;