const cons = (x, y) => (fn) => fn(x, y);
const car = (pair) => pair((x) => x);
const cdr = (pair) => pair((x, y) => y);

const makeGame = (rule, makeQuestion) => cons(rule, makeQuestion);
const getRule = (game) => car(game);
const getMakeQuestionFunction = (game) => cdr(game);

const generateQuestion = (game) => getMakeQuestionFunction(game)();

export { makeGame, getRule, generateQuestion };
