import axios from 'axios';

export const typeChecker = async (
  bookmark,
  message,
  videoType,
  videoDetailType,
  videoDetailType2,
  changedDetail2,
  userInfo
) => {
  let type = '';

  if (bookmark) {
    const data = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/users/mypage/${userInfo.userId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      }
    );
    if (message === '나의 운동') type = 'bookmark/?page=1&size=50';
    else if (message === '부위별')
      type = `painAreaBookmark/?page=1&size=50&painArea=${
        videoDetailType === '전체' ? '' : videoDetailType
      }`;
    else
      type = `jobBookmark/?page=1&size=50&job=${
        videoDetailType2 === '전체' ? '' : videoDetailType2
      }`;
    return type;
  }
  if (message === 'TOP5 재활운동') {
    type = 'popular?page=1&size=10';
  } else if (message === '직업별') {
    type = 'job?page=1&size=50';
  } else if (message === 'My 맞춤운동') {
    type = 'recommended?page=1&size=50';
  } else if (videoType === '전체') {
    type = `keyword?page=1&size=50&keyword=`;
  } else if (videoType === '부위별') {
    type = `keyword?page=1&size=50&keyword=${
      videoDetailType === '전체' ? '' : videoDetailType
    }`;
  } else if (videoType === '직업별') {
    if (videoDetailType2 === '전체') {
      type = `keyword?page=1&size=50&keyword=사무직`;
    } else {
      type = `keyword?page=1&size=50&keyword=${changedDetail2}`;
    }
  }

  return type;
};
