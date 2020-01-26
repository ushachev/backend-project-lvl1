import readlineSync from 'readline-sync';
import { getRule, generateQuestion } from './interfaces';
import config from './config';

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
    const { text: questionText, answer: correctAnswer } = generateQuestion(game);
    console.log(`Question: ${questionText}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
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

  const name = readlineSync.question('May I have your name? ');
  printGreeting(name);

  const result = play(game);
  printResult(result, name);
};
