/**
 * 2629. Function Composition
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 *
 * The function composition of an empty list of functions is the identity function f(x) = x.
 *
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

/**
 * @param { Function[] } functions
 * @return { Function }
 */
export var compose = function (functions) {
  return function (x) {
    if (!functions.length) return x;

    let res = [...functions].reverse();
    let val = res[0](x);

    for (let i = 1; i < res.length; i++) {
      val = res[i](val);
    }

    return val;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
