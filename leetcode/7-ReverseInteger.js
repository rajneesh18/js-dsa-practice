/**
 * 7. Reverse Integer
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */

/**
 * Solution - 1
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = x < 0 ? true : false;
  if (isNegative) x = x.toString().slice(1);
  x = Number(x.toString().split('').reverse().join(''));
  if (x > 0x7fffffff) {
    return 0;
  }
  if (isNegative) {
    x = `-${x}`;
  }

  return Number(x);
};

console.log(reverse(-120)); // -21
