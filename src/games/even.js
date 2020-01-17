import { makeGame } from '../interfaces';
import { random } from '../utilities';
import config from '../config';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenMakeQuestion = () => {
  const randomNum = random(...config.randomNumRange);

  const answer = randomNum % 2 ? 'no' : 'yes';
  const text = String(randomNum);

  return { text, answer };
};

const evenGame = makeGame(evenRules, evenMakeQuestion);

export default evenGame;
