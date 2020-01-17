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
  randomNumRange: [0, 100],
  progressionStepRange: [2, 8],
  progressionStartRange: [1, 20],
  progressionLength: 10,
  primeNumList: [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
  ],
};

export default config;
