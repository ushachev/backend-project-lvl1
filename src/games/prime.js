import { makeGame } from '../interfaces';
import { random } from '../utilities';
import config from '../config';

// prettier-ignore
const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeMakeQuestion = () => {
  const randomNum = random(...config.randomNumRange);

  const answer = config.primeNumList.includes(randomNum) ? 'yes' : 'no';
  const text = String(randomNum);

  return { text, answer };
};

const primeGame = makeGame(primeRules, primeMakeQuestion);

export default primeGame;
