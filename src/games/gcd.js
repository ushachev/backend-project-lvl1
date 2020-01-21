import { makeGame } from '../interfaces';
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
const makeQuestion = () => {
  const num1 = getRandomNum(...config.randomNumRange);
  const num2 = getRandomNum(...config.randomNumRange);

  const questionAnswer = String(gcd(num1, num2));
  const questionText = `${num1} ${num2}`;

  return { questionText, questionAnswer };
};

const gcdGame = makeGame(rule, makeQuestion);

export default gcdGame;
