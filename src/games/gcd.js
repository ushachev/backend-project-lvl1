import { makeQuiz } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const gcd = (a, b) => {
  const iter = (divisor) => {
    if (divisor === 1) return 1;
    const isCommonDivisor = a % divisor === 0 && b % divisor === 0;

    return isCommonDivisor ? divisor : iter(divisor - 1);
  };

  return iter(a < b ? a : b);
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
