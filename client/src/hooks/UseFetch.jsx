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
        `http://localhost:8080/video/keyword?page=1&size=30&keyword=${keyword}`
      );
      if (!data) {
        throw new Error(`서버에 오류가 있습니다.`);
      }

      setList((prev) => [...prev, ...data]); // response.data
      setHasMore(data.length > 0); // 다 끝났으면 빈배열을 받을지? 아니면 따로 boolean 변수를 둘지? 회의를 해봐야겠음
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { hasMore, list, isLoading };
};
export default useFetch;
