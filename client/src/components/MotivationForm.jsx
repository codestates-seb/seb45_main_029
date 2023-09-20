import {useState} from "react";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const MotivationForm = () => {
  const [memo, setMemo] = useState('');
  // const [points, setPoints] = useState(0);

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  }

  const handleSaveMemo = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/myResolution` , {content : memo})

      const savedMemo = response.data;
      setMemo([...memo, savedMemo]);

      setMemo('');
    }catch(error){
      console.log('메모를 저장하는 데 문제가 발생했습니다', error)
    }
  }

  return(
    <div>
      <input type="text" value={memo} onChange={handleMemoChange} placeholder="글을 작성해주세요!" />
      <button onClick={handleSaveMemo}>등록하기</button>
    </div>
  )
}

export default MotivationForm;