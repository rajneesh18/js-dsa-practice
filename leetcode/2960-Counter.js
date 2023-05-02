/**
 * Counter Function
 *
 * @param {number} n
 * @return {Function}
 */
var createCounter = (n) => {
  return () => n++;
};
var counter = createCounter(10);
// console.log(counter(), counter(), counter());
