import { makeGame } from '../interfaces';
import getRandomNum from '../utilities';
import config from '../config';

const makeProgression = (start, step) => {
  const iter = (progression, counter) => {
    if (counter === config.progressionLength - 1) return progression;
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
  const position = getRandomNum(0, config.progressionLength);

  const questionAnswer = String(progression[position]);
  const questionText = progression.fill('..', position, position + 1).join(' ');

  return { questionText, questionAnswer };
};

const progressionGame = makeGame(rule, makeQuestion);

export default progressionGame;
