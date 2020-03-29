import { makeQuiz } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const rule = 'Find the greatest common divisor of given numbers.';
const generatePuzzle = () => {
  const num1 = getRandomNum(...config.randomNumRange);
  const num2 = getRandomNum(...config.randomNumRange);

  const answer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;

  return { question, answer };
};

const gcdQuiz = makeQuiz(rule, generatePuzzle);

export default gcdQuiz;
