import readlineSync from 'readline-sync';
import { getRules, getQuestion } from './interfaces';
import config from './config';

const getAnswer = (text) => readlineSync.question(text);

const printTitle = (rules) => {
  console.log(config.welcome);
  console.log(rules);
  console.log();
};
const printGreeting = (name) => {
  console.log(`Hello, ${name}!`);
  console.log();
};
const play = (game) => {
  for (let i = 0; i < config.rounds; i += 1) {
    const question = getQuestion(game);
    console.log(`Question: ${question.text}`);
    const answer = getAnswer('Your answer: ');

    if (answer === question.answer) {
      console.log(config.rightAnswer);
    } else {
      console.log(config.wrongAnswer(answer, question.answer));
      return config.wrongEnd;
    }
  }

  return config.rightEnd;
};
const printResult = (result, name) => {
  console.log(`${result}, ${name}!`);
};

export default (game) => {
  printTitle(getRules(game));

  const name = getAnswer(config.nameRequest);
  printGreeting(name);

  const result = play(game);
  printResult(result, name);
};
