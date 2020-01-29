import { makeQuiz } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const rule = 'What is the result of the expression?';
const generatePuzzle = () => {
  const index = getRandomNum(0, operations.length - 1);
  const [signOperation, doOperation] = operations[index];
  const operand1 = getRandomNum(...config.randomNumRange);
  const operand2 = getRandomNum(...config.randomNumRange);

  const answer = String(doOperation(operand1, operand2));
  const question = `${operand1} ${signOperation} ${operand2}`;

  return { question, answer };
};

const calcQuiz = makeQuiz(rule, generatePuzzle);

export default calcQuiz;
