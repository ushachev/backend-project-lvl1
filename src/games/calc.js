import { makeGame } from '../interfaces';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const calcRules = 'What is the result of the expression?';
const calcMakeQuestion = () => {
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const random1 = Math.floor(Math.random() * 100);
  const random2 = Math.floor(Math.random() * 100);
  const operationSign = operation[0];
  const operationFunc = operation[1];
  const answer = String(operationFunc(random1, random2));
  const text = `${random1} ${operationSign} ${random2}`;

  return { text, answer };
};

const calc = makeGame(calcRules, calcMakeQuestion);

export default calc;
