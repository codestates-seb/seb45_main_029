import {useState, useEffect} from "react";

import {Motivation , MotivationSection , MotivationPages} from "../style/Motivation"
import MotivationNav from "../components/MotivationNav";
import MotivationForm from "../components/MotivationForm"
import MotivationList from "../components/MotivationList"
import { useSelector } from 'react-redux';
import wait from "../assets/wait.png"

const MotivationPage = () => {
  const [isPost, setIsPost] = useState(false);
  const [formattedTime, setFormattedTime] = useState(""); 
  const [login, setLogin] = useState(false);

  const userInfo = useSelector((state) => state.user);
  const info = JSON.parse(window.localStorage.getItem('info'));

  useEffect(() => {
    if (userInfo.loggedIn || info) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [userInfo, info]);

  return(
    <Motivation>
      <section className="content_pd container_wt">
        <MotivationNav/>
        <MotivationSection>
          <h2>나의 <span>다짐</span></h2>
          {login === false ? (
            <div className="loading-box">
              <h3>로그인 후 이용가능합니다</h3>
              <img src={wait} alt="wait-img" />
            </div>
          ) : (
            <MotivationPages>
            <MotivationList isPost={isPost} formattedTime={formattedTime} />
            <MotivationForm isPost={isPost} setIsPost={setIsPost} formattedTime={formattedTime} setFormattedTime={setFormattedTime}  />
            </MotivationPages>
          )}
        </MotivationSection>
      </section>
    </Motivation>
  )
}

export default MotivationPage;