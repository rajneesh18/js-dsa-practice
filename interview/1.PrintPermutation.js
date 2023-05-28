/**
 * Design an algorithm to print all permutations of a string.
 */

let permutation = (str, l, r) => {
  if (l === r) {
    document.write(`${str} `);
  } else {
    for (let i = l; i <= r; i++) {
      permutation(swap(str, l, i), l + 1, r);
    }
  }
};

let swap = (str, i, j) => {
  if (i === j) return str;

  str = str.split('');
  [str[i], str[j]] = [str[j], str[i]];
  str = str.join('');

  return str;
};

console.log(permutation('abc', 0, 7));
// abc acb bac bca cba cab
