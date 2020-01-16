// prettier-ignore
const wrongAnswer = (wrong, rigtht) => (
  `'${wrong}' is wrong answer ;(. Correct answer was '${rigtht}'.`
);
const config = {
  wrongAnswer,
  welcome: 'Welcome to the Brain Games!',
  nameRequest: 'May I have your name? ',
  rounds: 3,
  rightAnswer: 'Correct!',
  rightEnd: 'Congratulations',
  wrongEnd: "Let's try again",
};

export default config;
