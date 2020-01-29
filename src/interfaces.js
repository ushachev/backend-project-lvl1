const cons = (x, y) => (fn) => fn(x, y);
const car = (pair) => pair((x) => x);
const cdr = (pair) => pair((x, y) => y);

const makeQuiz = (rule, generatePuzzle) => cons(rule, generatePuzzle);
const getRule = (quiz) => car(quiz);
const generatePuzzle = (quiz) => cdr(quiz);

const getPuzzle = (quiz) => generatePuzzle(quiz)();

export { makeQuiz, getRule, getPuzzle };
