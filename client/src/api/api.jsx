import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL; // .env 파일에서 가져오게 했습니다!

export const api = (uri, method, data) => {
  const config = {
    method: method ? method : 'get',
    url: serverUrl + uri,
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer `,
      // Add more headers as needed
    },
    data: data,
  };
  return axios(config);
};
