const getRandomNum = (start, end) => (
  Math.floor(Math.random() * (end - start + 1)) + start
);

export default getRandomNum;
