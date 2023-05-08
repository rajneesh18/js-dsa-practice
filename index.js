import { jsonStringify } from './leetcode/2633.JsonStringify.js';

let obj = {
  a: 1,
  b: null,
  sum: () => {
    return 'sss';
  },
  arr: [1, 2, 3],
};
console.log(jsonStringify(obj));
