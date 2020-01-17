import { makeGame } from '../interfaces';
import { random, gcd } from '../utilities';
import config from '../config';

const gcdRules = 'Find the greatest common divisor of given numbers.';
const gcdMakeQuestion = () => {
  const rnd1 = random(...config.randomNumRange);
  const rnd2 = random(...config.randomNumRange);

  const answer = String(gcd(rnd1, rnd2));
  const text = `${rnd1} ${rnd2}`;

  return { text, answer };
};

const gcdGame = makeGame(gcdRules, gcdMakeQuestion);

export default gcdGame;
