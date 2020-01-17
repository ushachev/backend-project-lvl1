import { makeGame } from '../interfaces';
import { random } from '../utilities';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const calcRules = 'What is the result of the expression?';
const calcMakeQuestion = () => {
  const operation = operations[random(0, operations.length)];
  const rnd1 = random(0, 100);
  const rnd2 = random(0, 100);
  const operationSign = operation[0];
  const operationFunc = operation[1];
  const answer = String(operationFunc(rnd1, rnd2));
  const text = `${rnd1} ${operationSign} ${rnd2}`;

  return { text, answer };
};

const calcGame = makeGame(calcRules, calcMakeQuestion);

export default calcGame;
