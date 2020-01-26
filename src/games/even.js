import { makeGame } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeQuestion = () => {
  const num = getRandomNum(...config.randomNumRange);

  const answer = num % 2 ? 'no' : 'yes';
  const text = String(num);

  return { text, answer };
};

const evenGame = makeGame(rule, makeQuestion);

export default evenGame;
