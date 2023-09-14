import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL; // .env 파일에서 가져오게 했습니다!

export const api = (uri, method, data) => {
  const config = {
    method: method ? method : 'get',
    url: serverUrl + uri,
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJJZCI6NCwidXNlcm5hbWUiOiJybGF0bmFsQG5hdmVyLmNvbSIsInN1YiI6InJsYXRuYWxAbmF2ZXIuY29tIiwiaWF0IjoxNjk0NTI3Mjk4LCJleHAiOjE2OTQ1MzQ0OTh9.p16u1ixeVjc_k-8KNLVFa7frkTp2uuYzQWRlxr2aBoA`,
      // Add more headers as needed
    },
    data: data,
  };
  return axios(config);
};
