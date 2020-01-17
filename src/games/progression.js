import { makeGame } from '../interfaces';
import { random } from '../utilities';
import config from '../config';

const makeProgression = (start, step, length) => {
  const iter = (arr, counter) => {
    if (counter === length) return arr;
    arr.push(arr[counter - 1] + step);

    return iter(arr, counter + 1);
  };

  return iter([start], 1);
};

const progressionRules = 'What number is missing in the progression?';
const progressionMakeQuestion = () => {
  const step = random(...config.progressionStepRange);
  const start = random(...config.progressionStartRange);
  const progression = makeProgression(start, step, config.progressionLength);
  const position = random(0, config.progressionLength);

  const answer = String(progression[position]);
  const text = progression.fill('..', position, position + 1).join(' ');

  return { text, answer };
};

const progressionGame = makeGame(progressionRules, progressionMakeQuestion);

export default progressionGame;
