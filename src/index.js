import readlineSync from 'readline-sync';

const welcomeStr = 'Welcome to the Brain Games!';
const nameRequest = 'May I have your name? ';

const getAnswer = (text) => readlineSync.question(text);
const getName = () => getAnswer(nameRequest);

const printTitle = (rules) => {
  console.log(welcomeStr);
  console.log(rules);
  console.log();
};
const printGreeting = (name) => {
  console.log(`Hello, ${name}!`);
  console.log();
};
const play = (game) => {
  for (let i = 0; i < game.iterCount; i += 1) {
    const question = game.question();
    console.log(`Question: ${question.text}`);
    const answer = getAnswer('Your answer: ');

    if (answer === question.answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${question.answer}'.`,
      );
      return "Let's try again";
    }
  }

  return 'Congratulations';
};

export default (game) => {
  printTitle(game.rules);

  const name = getName();

  printGreeting(name);
  console.log(`${play(game)}, ${name}!`);
};
