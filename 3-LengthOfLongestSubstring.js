/**
 * 3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example:
 * Input: abcabcbb, Output: 3
 * Input: bbbb, Output: 1
 * Input: pwwkew, Output: 3
 */

/**
 * @param { string } s
 * @return { number }
 */
const lengthOfLongestSubstring = (s) => {
  if (!s) return 0;

  let start = 0;
  let end = 0;
  let maxlength = 0;

  let uniqueCharacters = new Set();

  while (end != s.length) {
    if (!uniqueCharacters.has(s[end])) {
      uniqueCharacters.add(s[end]);
      maxlength = Math.max(maxlength, uniqueCharacters.size);
      end++;
    } else {
      uniqueCharacters.delete(s[start]);
      start++;
    }
  }

  return maxlength;
};

console.log(lengthOfLongestSubstring(''));
