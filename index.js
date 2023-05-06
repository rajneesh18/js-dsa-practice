import { flat } from './leetcode/2625-FlattenDeeplyNestedArray.js';

let arr = [
  1,
  2,
  3,
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [4, 5, 6],
  [13, 14, 15],
];

console.log(flat(arr, 2));
