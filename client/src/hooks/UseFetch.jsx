import { useState, useEffect, useCallback } from 'react';
//import axios from 'axios';
// const END_POINT = 'https://';
const useFetch = (page) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false); //로딩 구현 시에만 필요

  //query API 요청 보내기
  const sendQuery = useCallback(async () => {
    // const URL = `${END_POINT}?${page}~~~`; // page에 대한 정보를

    try {
      setIsLoading(true); // 우선은 하드코딩
      const response = [
        'https://funissu.com/wp-content/uploads/2021/08/%EC%83%81%EC%97%85%EC%9A%A9%EB%AC%B4%EB%A3%8C%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%82%AC%EC%9D%B4%ED%8A%B8-0.jpg',
        'https://cdn.pixabay.com/photo/2023/06/10/06/36/pink-8053329_1280.jpg',
      ]; // axios로 대체할 것
      if (!response) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setList((prev) => [...prev, ...response]); // response.data
      if (page < 5) {
        // 지금은 하드코딩
        setHasMore(response.length > 0);
      } else {
        setHasMore(false);
      }
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
