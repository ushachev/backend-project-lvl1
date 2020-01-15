const evenMakeQuestion = () => {
  const random = Math.floor(Math.random() * 100);
  const answer = random % 2 ? 'no' : 'yes';
  const text = String(random);

  return { text, answer };
};
const even = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  question: evenMakeQuestion,
  iterCount: 3,
};

const progression = {
  rules: 'What number is missing in this progression?',
  iterCount: 3,
};

export { even, progression };
