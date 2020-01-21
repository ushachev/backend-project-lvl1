import readlineSync from 'readline-sync';
import { getRule, generateQuestion } from './interfaces';
import config from './config';

const getAnswer = (text) => readlineSync.question(text);

const printTitle = (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  console.log();
};
const printGreeting = (name) => {
  console.log(`Hello, ${name}!`);
  console.log();
};
const play = (game) => {
  for (let i = 0; i < config.roundsCount; i += 1) {
    const { questionText, questionAnswer } = generateQuestion(game);
    console.log(`Question: ${questionText}`);
    const userAnswer = getAnswer('Your answer: ');

    if (userAnswer === questionAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${questionAnswer}'.`,
      );
      return "Let's try again";
    }
  }

  return 'Congratulations';
};
const printResult = (result, name) => {
  console.log(`${result}, ${name}!`);
};

export default (game) => {
  printTitle(getRule(game));

  const name = getAnswer('May I have your name? ');
  printGreeting(name);

  const result = play(game);
  printResult(result, name);
};
