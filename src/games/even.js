import { makeGame } from '../interfaces';
import { random } from '../utilities';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenMakeQuestion = () => {
  const randomNum = random(0, 100);

  const answer = randomNum % 2 ? 'no' : 'yes';
  const text = String(randomNum);

  return { text, answer };
};

const evenGame = makeGame(evenRules, evenMakeQuestion);

export default evenGame;
