import { makeGame } from '../interfaces';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenMakeQuestion = () => {
  const random = Math.floor(Math.random() * 100);
  const answer = random % 2 ? 'no' : 'yes';
  const text = String(random);

  return { text, answer };
};

const even = makeGame(evenRules, evenMakeQuestion);

export default even;
