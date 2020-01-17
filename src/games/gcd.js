import { makeGame } from '../interfaces';
import { random, gcd } from '../utilities';

const gcdRules = 'Find the greatest common divisor of given numbers.';
const gcdMakeQuestion = () => {
  const rnd1 = random(0, 100);
  const rnd2 = random(0, 100);
  const answer = String(gcd(rnd1, rnd2));
  const text = `${rnd1} ${rnd2}`;

  return { text, answer };
};

const gcdGame = makeGame(gcdRules, gcdMakeQuestion);

export default gcdGame;
