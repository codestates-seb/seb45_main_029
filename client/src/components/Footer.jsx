// eslint-disable-next-line no-unused-vars
import React from "react";
import {FooterContainer, FooterSection} from '../style/Footer' 
import { Link } from "react-router-dom";

function Footer() {
    function UserInfoClick() {
        alert('준비중입니다.')    
    }

    return (
        <FooterContainer>
            <FooterSection className="container_wt">
                <div className="left_box">
                    <h3>주식회사 코드스테이츠 & Team Assa | 대표자 : 윤민지</h3>
                    <div className="text_box">
                        <p>팀원 :</p>
                        <ul>
                            <li>프론트엔드 : 이용혁, 설미선, 김준성</li>
                            <li>백엔드 : 윤민지, 손우진, 이동훈</li>
                        </ul>
                    </div>
                    <div className="link_box">
                        <Link to="/">홈페이지</Link>
                        <span>|</span>
                        <Link onClick={UserInfoClick}>개인정보 처리방침</Link>
                    </div>
                </div>
                <div className="right_box">
                    <p>구글 크롬에 최적화 되어있습니다.</p>
                </div>
            </FooterSection>
        </FooterContainer>
    );
}

export default Footer;