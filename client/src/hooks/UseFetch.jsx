import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (page, keyword) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false); //로딩 구현 시에만 필요

  //@todo query API 요청 보내기
  const sendQuery = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/video/keyword?page=${page}&size=1&keyword=${keyword}`,
        {
          headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '69420',
          },
        }
      );

      if (!data) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setList((prev) => [...prev, ...data.data]);
      setHasMore(data.data.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page, keyword]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page, keyword]);

  return { hasMore, list, isLoading };
};
export default useFetch;
