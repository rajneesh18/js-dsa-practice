/**
 * 2960: Counter
 * Given an integer n, return a counter function.
 * This counter function initally return n & then reutrns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)
 */

/**
 * Counter Function
 *
 * @param {number} n
 * @return {Function}
 */
export const createCounter = (n) => {
  return () => n++;
};

/**
 * var counter = createCounter(10);
 * console.log(counter(), counter(), counter());
 */
