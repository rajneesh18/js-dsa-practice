import { createCounter } from './leetcode/2665-CounterII.js';

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
