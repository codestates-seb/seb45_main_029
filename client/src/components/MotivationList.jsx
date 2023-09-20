import {  useEffect , useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const MemoList = ( {isPost, formattedTime} ) => {
  const userInfo = useSelector((state) => state.user);
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    fetchMemos();
  }, [isPost]);

  const fetchMemos = async () => {
    try {
      const info = await JSON.parse(window.localStorage.getItem('info'));
      const response = await axios.get(
        `${SERVER_URL}/myResolution?page=1&size=10`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.accessToken || info.accessToken}`,
          },
        }
      );
    
      setMemos(response.data.data);
      console.log(response.data)
    } catch (error) {
      console.error('메모 목록을 불러오는 데 문제가 발생했습니다.', error);
    }
  };

  return (
    <div>
      <h2>Motivation List</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.userId}>
            <p>{memo.content}</p>
            <span>{formattedTime}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;