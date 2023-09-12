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
