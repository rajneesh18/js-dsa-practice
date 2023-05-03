/**
 * 2623. Memoize
 * Given a function fn, return a memoized version of that function.
 * A memoized function is a function that will never be called twice with the same input. Instead it will return a cache value.
 */

export var memoize = (fn) => {
  var cache = [];

  return function (...args) {
    var key = args.join('-').toString();
    if (cache[`${key}`] != undefined) {
      return cache[`${key}`];
    }

    return (cache[`${key}`] = Number(fn(...args)));
  };
};

/**
 * let callCount = 0;
 * const memoizedFn = memoize((a, b) => {
 *   callCount += 1;
 *   return a + b;
 * });
 *
 * console.log(memoizedFn(2, 3)); // 5
 * console.log(memoizedFn(2, 5)); // 5
 * console.log(callCount); // 1
 */
