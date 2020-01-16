const cons = (x, y) => (fn) => fn(x, y);
const car = (pair) => pair((x) => x);
const cdr = (pair) => pair((x, y) => y);

const makeGame = (rules, makeQuestion) => cons(rules, makeQuestion);
const getRules = (game) => car(game);
const getQuestionFunction = (game) => cdr(game);

const getQuestion = (game) => getQuestionFunction(game)();

export { makeGame, getRules, getQuestion };
