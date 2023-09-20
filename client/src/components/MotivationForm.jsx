import { useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import {  MotivaionFormBox } from '../style/Motivation'

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const MotivationForm = ({isPost, setIsPost}, setFormattedTime) => {
  const [memo, setMemo] = useState('');

  const userInfo = useSelector((state) => state.user);
  // const [points, setPoints] = useState(0);

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveMemo();
    }
  }

  const handleSaveMemo = async () => {
    try {
      const info = await JSON.parse(window.localStorage.getItem('info'));
      const currentTime = new Date(); 
      const currentTimeString = currentTime.toLocaleString(); 

      setMemo("");
      setFormattedTime(currentTimeString);

      const response = await axios.post(
        `${SERVER_URL}/myResolution/`,
        { content: memo },
        {
          headers: {
            Authorization: `Bearer ${info.accessToken || userInfo.accessToken}`,
          },
        }
      );

      // const savedMemo = response.data;
      // setMemo([...memo, savedMemo]);

      setMemo('');
      setIsPost(!isPost);
    }catch(error){
      console.log('메모를 저장하는 데 문제가 발생했습니다', error)
    }
  }

  return(
    <MotivaionFormBox>
      <input type="text" value={memo} onKeyDown={handleKeyPress}  onChange={handleMemoChange} placeholder="글을 작성해주세요!" />
      <button onClick={handleSaveMemo}>전송</button>
    </MotivaionFormBox>
  )
}

export default MotivationForm;