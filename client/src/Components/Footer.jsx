// eslint-disable-next-line no-unused-vars
import React from "react";
import  styled  from "styled-components";

const FootContainer = styled.footer`
width: 120rem;
height: 18.75rem;
flex-shrink: 0;
color:rgba(255, 255, 255, 1);
background-color:rgba(12, 33, 57, 1);
& .text {
    color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
& .text-1{
   
width: 310px;
height: 19px;
top: 89px;
left: 222px;
line-height:14.32px;

}
& .text-2 {
    width: 36px;
height: 19px;
top: 118px;
left: 222px;
line-height:19.09px ;
align-items:center;
}
& .text-3 {
    width: 222px;
height: 19px;
top: 118px;
left: 273px;
line-height:19.09px ;
align-items:center;
}
&.text-4{
    width: 195px;
height: 19px;
top: 151px;
left: 273px;
line-height:19.09px ;
align-items:center;

}
&.text-5 {
    width: 142px;
height: 17px;
top: 195px;
left: 220px;
line-height:14.32px ;
align-items:center;
}
&.text-6 {
    width: 168px;
height: 17px;
top: 195px;
left: 1532px;
line-height:14.32px ;
align-items:center;
}
`;

function Footer() {
    return (
        <FootContainer>
        
        <ul className="text">
            <li className="text-1">주식회사 코드스테이츠 & 팀 아싸 | 대표자: 윤민지</li>
            <li className="text-2">팀원 :</li>
            <li className="text-3">프론트엔드 : 설미선, 이용혁, 김준성</li>
            <li className="text-4">백엔드 : 윤민지, 이동훈, 손우진</li>
            <li className="text-5">홈페이지 | 개인정보 처리방침</li>
            <li className="text-6">구글 크롬에 최적화 되어있습니다</li>
           
        </ul>
          
    </FootContainer>
    );
}

export default Footer;