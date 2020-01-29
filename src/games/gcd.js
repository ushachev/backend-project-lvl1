import { makeQuiz } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const gcd = (a, b) => {
  const min = a < b ? a : b;

  for (let i = min; i > 1; i -= 1) {
    const isCommonDivisor = a % i === 0 && b % i === 0;

    if (isCommonDivisor) return i;
  }

  return 1;
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
