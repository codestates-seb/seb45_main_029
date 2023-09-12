import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL; // .env 파일에서 가져오게 했습니다!

export const api = (uri, method, data) => {
  const config = {
    method: method ? method : 'get',
    url: serverUrl + uri,
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJJZCI6MSwidXNlcm5hbWUiOiJidWR4aWdlQG5hdmVyLmNvbSIsInN1YiI6ImJ1ZHhpZ2VAbmF2ZXIuY29tIiwiaWF0IjoxNjk0NTAxNjkzLCJleHAiOjE2OTQ1MDg4OTN9.kshBU7jDsYUwqAB7OHj6QkEIJ_TcSexd_ROkQ-fAleo`,
      // Add more headers as needed
    },
    data: data,
  };
  return axios(config);
};
