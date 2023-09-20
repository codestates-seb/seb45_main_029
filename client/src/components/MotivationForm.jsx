import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const MotivationForm = ({ isPost, setIsPost }) => {
  const [memo, setMemo] = useState('');
  // const [points, setPoints] = useState(0);
  const userInfo = useSelector((state) => state.user);
  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleSaveMemo = async () => {
    try {
      const info = await JSON.parse(window.localStorage.getItem('info'));
      const response = await axios.post(
        `${SERVER_URL}/myResolution/?page=1&size=10`,
        { content: memo },
        {
          headers: {
            Authorization: `Bearer ${info.accessToken || userInfo.accessToken}`,
          },
        }
      );
      setMemo('');
      setIsPost(!isPost);
    } catch (error) {
      console.log('메모를 저장하는 데 문제가 발생했습니다', error);
    }
  };

  return (
    <div>
      <input
        type='text'
        value={memo}
        onChange={handleMemoChange}
        placeholder='글을 작성해주세요!'
      />
      <button onClick={handleSaveMemo}>등록하기</button>
    </div>
  );
};

export default MotivationForm;
