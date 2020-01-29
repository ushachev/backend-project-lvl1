import { makeQuiz } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const generatePuzzle = () => {
  const num = getRandomNum(...config.randomNumRange);

  const answer = num % 2 ? 'no' : 'yes';
  const question = String(num);

  return { question, answer };
};

const evenQuiz = makeQuiz(rule, generatePuzzle);

export default evenQuiz;
