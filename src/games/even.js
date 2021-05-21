import { makeQuiz } from '../interfaces.js';
import getRandomNum from '../utilities.js';
import config from '../config.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const generatePuzzle = () => {
  const num = getRandomNum(...config.randomNumRange);

  const answer = num % 2 ? 'no' : 'yes';
  const question = String(num);

  return { question, answer };
};

const evenQuiz = makeQuiz(rule, generatePuzzle);

export default evenQuiz;
