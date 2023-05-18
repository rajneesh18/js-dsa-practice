/**
 * 8. String to Integer (atoi)
 */

/**
 * @param {string} s
 * @return {number}
 */
export var myAtoi = function (s) {
  if (!s && s.trim().length) return 0;
  s = s.trim();

  let i = 0;
  let sign = s.charAt(i) === '-' ? -1 : 1;
  let res = 0;
  var INT_MAX = 0x7fffffff; // For 32 bit integer
  var INT_MIN = -INT_MAX - 1;

  if (sign == -1 || s.charAt(i) == '+') {
    i++;
  }

  while (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
    res += s[i++];
  }
  res = sign * res;

  if (INT_MIN <= res && INT_MAX >= res) {
    return res;
  }
  return sing === 1 ? INT_MAX : INT_MIN;
};

// let str = '+1';
// console.log(myAtoi(str));
