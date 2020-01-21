import { makeGame } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const rule = 'What is the result of the expression?';
const makeQuestion = () => {
  const index = getRandomNum(0, operations.length - 1);
  const [signOperation, doOperation] = operations[index];
  const operand1 = getRandomNum(...config.randomNumRange);
  const operand2 = getRandomNum(...config.randomNumRange);

  const questionAnswer = String(doOperation(operand1, operand2));
  const questionText = `${operand1} ${signOperation} ${operand2}`;

  return { questionText, questionAnswer };
};

const calcGame = makeGame(rule, makeQuestion);

export default calcGame;
