import axios from 'axios';

const serverUrl = 'ec2-13-209-21-17.ap-northeast-2.compute.amazonaws.com:8080';

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
