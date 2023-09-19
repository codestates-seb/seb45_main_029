import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL; // .env 파일에서 가져오게 했습니다!

export const api = (uri, method, data) => {
  const info = JSON.parse(window.localStorage.getItem('info'));
  const config = {
    method: method ? method : 'get',
    url: serverUrl + uri,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${info ? info.accessToken : ''}`, // info는 객체이므로, info 객체 안에 있는 accessToken을 가져온다
      // Add more headers as needed
    },
    data: data,
  };
  return axios(config);
};
