/**
 * 2676. Throttle
 * Given a function fn and a time in milliseconds t, return a throttled version of that function.
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let lastArgs;
  let shouldCall = true;

  var execute = () => {
    if (shouldCall && lastArgs) {
      fn(...lastArgs);
      lastArgs = null;
      shouldCall = false;

      setTimeout(() => {
        shouldCall = true;
        execute();
      }, t);
    }
  };

  return function (...args) {
    lastArgs = args;
    execute();
  };
};
