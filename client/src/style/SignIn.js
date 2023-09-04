import { styled, css } from 'styled-components';


export const Container = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`;
export const LoginBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 170px;
margin-bottom: 400px;
width: 500px;
height: 400px;
flex-shrink: 0;
border-radius: 20px;
border: 1px solid #000;

.top-title {
    display: flex;
    color: #000;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: relative;

&::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 1px;
    border-bottom: 2px solid black;
}
}
`;

export const Button = styled.div`
width: 350px;
height: 50px;
flex-shrink: 0;
border-radius: 5px;
background: #0C2139;
display: flex;
justify-content: center;
align-items: center;

color: #FFF;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

cursor: pointer;

${(props) =>
    props.primary &&
    css`
      border: none;
      background: rgba(12, 33, 57, 1);
      color: #fff;
    `}

`;