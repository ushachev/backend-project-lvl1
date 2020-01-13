#!/usr/bin/env node
import { getAnswer } from '..';

const greeting = 'Welcome to the Brain Games!\n';
const nameRequest = 'May I have your name? ';

console.log(greeting);
console.log(`Hello, ${getAnswer(nameRequest)}!`);
