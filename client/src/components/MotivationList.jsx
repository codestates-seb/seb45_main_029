import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const MemoList = () => {

  const [memos, setMemos] = useState([]);
  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = async () => {
    try {
      const info = await JSON.parse(window.localStorage.getItem('info'));
      const response = await axios.get(`${SERVER_URL}/myResolution?page=1&size=10`,
        {
          headers: {
            Authorization : `Bearer ${info.accessToken.accessToken}` || '',
          },
        }
      );
    
      setMemos(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('메모 목록을 불러오는 데 문제가 발생했습니다.', error);
    }
  };

  return (
    <div>
      <h2>Memo List</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>{memo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;