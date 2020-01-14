import readlineSync from 'readline-sync';

const getAnswer = (text) => readlineSync.question(text);

export default getAnswer;
