/**
 * 5. Longest Palindromic Substring
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example:
 * Input: s = "babad" Output: "bab"
 * Explanation: "aba" is also a valid answer.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s = '') {
  if (s?.length === 1 || !s) return s;

  let i = 0;
  let longestSubstring;
  let max = 0;

  while (i < s.length) {
    let j = i + 1;
    while (j <= s.length) {
      let substr = s.substring(i, j);
      if (max < (substr?.length || 0) && isPalindrome(substr)) {
        max = substr?.length;
        longestSubstring = substr;
      }
      j++;
    }

    i++;
  }

  return longestSubstring;
};

let isPalindrome = (str) => {
  let len = str.length;
  let left = 0;
  let right = len - 1;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (left < right) {
      if (str[left++] != str[right--]) return false;
    }
  }

  return true;
};

let str = 'aacabdkacaa';
console.log(longestPalindrome(str));
