/**
 * Throttling:
 * Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.
 *
 * Debouncing:
 * Debouncing will bunch a series of sequential call to a function into a single call to that function.
 * It ensures that one notification is made for an event that fires multiple times.
 */

var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/** ***************************************************** */

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
