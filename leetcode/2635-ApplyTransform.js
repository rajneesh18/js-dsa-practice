/**
 * 2635: Apply Transform Over Each Element in Array
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

  The returned array should be created such that returnedArray[i] = fn(arr[i], i).

  Please solve it without the built-in Array.map method.
 */

/**
 * @param { number[] } arr
 * @param { function } fn
 * @return { number[] }
 */
export const map = (arr, fn) => {
  let transformed = [];
  let i = 0;
  for (let key of arr) transformed[i] = fn(arr[i], i);

  return transformed;
};
