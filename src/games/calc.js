import { makeGame } from '../interfaces';
import { random } from '../utilities';
import config from '../config';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const calcRules = 'What is the result of the expression?';
const calcMakeQuestion = () => {
  const randomIndex = random(0, operations.length);
  const [operationSign, operationFunc] = operations[randomIndex];
  const rnd1 = random(...config.randomNumRange);
  const rnd2 = random(...config.randomNumRange);

  const answer = String(operationFunc(rnd1, rnd2));
  const text = `${rnd1} ${operationSign} ${rnd2}`;

  return { text, answer };
};

const calcGame = makeGame(calcRules, calcMakeQuestion);

export default calcGame;
