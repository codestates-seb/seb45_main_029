import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL; // .env 파일에서 가져오게 했습니다!
const info = JSON.parse(window.localStorage.getItem('info'));

const getPosts = async (page) => {
  const response = await axios.get(
    `${SERVER_URL}/question?page=${page}&size=20&type=1`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${info ? info.accessToken : ''}`, // info는 객체이므로, info 객체 안에 있는 accessToken을 가져온다
      },
    }
  );

  return response.data;
};

const getPost = async (questionId) => {
  await axios.get(`${SERVER_URL}/question/${questionId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${info ? info.accessToken : ''}`,
    },
  });
};

const addPosts = async (newPost) => {
  await axios.post(`${SERVER_URL}/question`, newPost, {
    headers: {
      Authorization: `Bearer ${
        info.accessToken ||
        JSON.parse(window.localStorage.getItem('info')).accessToken
      }`,
    },
  });
};

const removePosts = async (questionId) => {
  await axios.delete(`${SERVER_URL}/question/${questionId}`);
};

const modifyPosts = async (data) => {
  const { questionId, ...updateData } = data;
  await axios.patch(`${SERVER_URL}/question/${questionId}`, updateData, {
    headers: {
      Authorization: `Bearer ${
        info.accessToken ||
        JSON.parse(window.localStorage.getItem('info')).accessToken
      }`,
    },
  });
};

export { getPosts, addPosts, removePosts, modifyPosts, getPost };
