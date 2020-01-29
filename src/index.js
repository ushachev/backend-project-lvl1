import readlineSync from 'readline-sync';
import { getRule, getPuzzle } from './interfaces';
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

export default (quiz) => {
  printTitle(getRule(quiz));

  const name = readlineSync.question('May I have your name? ');
  printGreeting(name);

  const holdQuiz = (round) => {
    if (round === config.roundsCount) {
      return `Congratulations, ${name}`;
    }
    const { question, answer } = getPuzzle(quiz);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
Let's try again, ${name}`;
    }

    return holdQuiz(round + 1);
  };

  console.log(holdQuiz(0));
};
