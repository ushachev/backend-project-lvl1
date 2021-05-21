import readlineSync from 'readline-sync';
import { getRule } from './interfaces.js';
import config from './config.js';
import playGame from './gameEngine.js';

export default (quiz) => {
  const rule = getRule(quiz);
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const ui = {
    output: console.log,
    input: readlineSync.question,
  };
  const gameResult = playGame(quiz, ui, config.roundsCount);

  if (gameResult === null) {
    console.log(`Congratulations, ${name}!`);
  } else {
    const { userAnswer, answer } = gameResult;

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};
