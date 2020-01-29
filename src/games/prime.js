import { makeQuiz } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const isPrime = (number) => {
  if (number < 2) return false;

  const iter = (divisor) => {
    if (divisor > number / 2) return true;
    if (number % divisor === 0) return false;

    return iter(divisor + 1);
  };

  return iter(2);
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generatePuzzle = () => {
  const num = getRandomNum(...config.randomNumRange);

  const answer = isPrime(num) ? 'yes' : 'no';
  const question = String(num);

  return { question, answer };
};

const primeQuiz = makeQuiz(rule, generatePuzzle);

export default primeQuiz;
