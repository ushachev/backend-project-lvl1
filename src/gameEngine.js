import { getPuzzle } from './interfaces.js';

export default (quiz, ui, roundsCount) => {
  const iter = (round) => {
    if (round === roundsCount) return null;

    const { question, answer } = getPuzzle(quiz);
    ui.output(`Question: ${question}`);

    const userAnswer = ui.input('Your answer: ');

    if (userAnswer !== answer) {
      return { userAnswer, answer };
    }
    ui.output('Correct!');

    return iter(round + 1);
  };

  return iter(0);
};
