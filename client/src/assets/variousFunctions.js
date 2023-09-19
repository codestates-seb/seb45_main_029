import axios from 'axios';

export const jobChoose = (value, setCheckedListJob) => {
  const jobChoice = value;
  if (
    jobChoice === '경영·사무' ||
    jobChoice === '연구·기술' ||
    jobChoice === '예술·디자인·방송' ||
    jobChoice === '미용·여행·음식' ||
    jobChoice === '영업·판매·운송'
  )
    setCheckedListJob && setCheckedListJob('사무직');
  else if (jobChoice === '보건·의료직') {
    setCheckedListJob && setCheckedListJob('사무직 및 현장직');
  } else {
    setCheckedListJob && setCheckedListJob('현장직');
  }
};

export const typeChecker = async (
  bookmark,
  message,
  videoType,
  videoDetailType,
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

    const job = data.data.job;
    const painArea = data.data.painArea;

    if (message === '나의 운동') type = 'bookmark/?page=1&size=30';
    else if (message === '부위별')
      type = `painAreaBookmark/?page=1&size=30&painArea=${painArea}`;
    else type = `jobBookmark/?page=1&size=30&job=${job}`;
    return type;
  }
  if (message === 'TOP5 재활운동') {
    type = 'popular?page=1&size=10';
  } else if (message === '직업별') {
    type = 'job?page=1&size=10';
  } else if (message === 'My 맞춤운동') {
    type = 'recommended?page=1&size=10';
  }
  if (videoType === '전체') {
    type = `keyword?page=1&size=30&keyword=`;
  } else if (videoType === '부위별') {
    type = `keyword?page=1&size=30&keyword=${videoDetailType}`;
  } else if (videoType === '직업별') {
    type = `keyword?page=1&size=30&keyword=${changedDetail2}`;
  }

  return type;
};
