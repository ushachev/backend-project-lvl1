import { makeGame } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const makeProgression = (start, step) => {
  const iter = (progression, counter) => {
    if (counter === config.progressionLength) return progression;
    progression.push(start + step * counter);

    return iter(progression, counter + 1);
  };

  return iter([], 0);
};

const rule = 'What number is missing in the progression?';
const makeQuestion = () => {
  const step = getRandomNum(...config.progressionStepRange);
  const start = getRandomNum(...config.progressionStartRange);
  const progression = makeProgression(start, step);
  const missingElementPosition = getRandomNum(0, config.progressionLength - 1);

  const answer = String(progression[missingElementPosition]);
  const text = progression
    .fill('..', missingElementPosition, missingElementPosition + 1)
    .join(' ');

  return { text, answer };
};

const progressionGame = makeGame(rule, makeQuestion);

export default progressionGame;
