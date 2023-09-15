import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (page, keyword, setPageNum) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedKeyword, SetSavedKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(-1);
  const sendQuery = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/video/keyword?page=${page}&size=1&keyword=${keyword}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );

      if (!data) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setList((prev) => [...prev, ...data.data]);
      setHasMore(data.data.length > 0);
      setIsLoading(false);
      SetSavedKeyword(keyword);
      setCurrentPage(page);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page, keyword]);

  useEffect(() => {
    if (keyword !== savedKeyword) {
      setList([]);
      setPageNum(1);
    }
    if (list.length !== 0 && page === currentPage) {
      return;
    }
    sendQuery();
  }, [sendQuery, page, keyword, setPageNum, savedKeyword, currentPage]);

  return { hasMore, list, isLoading };
};
export default useFetch;
