/**
 * 4. Median of Two Sorted Arrays
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 * Example:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 */

/**
 * @param {number[]} n1
 * @param {number[]} n2
 * @return {number}
 */
export var findMedianSortedArrays = function (n1, n2) {
  let res = combineTwoSortedArray(n1, n2);
  let med;

  let len = res?.length || 0;
  if ((len & 1) === 1) {
    med = (len + 1) / 2;
    med = res[med - 1];
  } else {
    med = (res[len / 2 - 1] + res[len / 2]) / 2;
  }
  return med;
};

var combineTwoSortedArray = (n1, n2) => {
  if (n1.length && !n2.length) return n1;
  if (!n1.length && n2.length) return n2;
  if (!n1.length && !n2.length) return [];

  let res = new Array();
  let total = (n1?.length || 0) + (n2?.length || 0);

  let start = 0;
  let i = 0;
  let j = 0;

  while (start < total) {
    if (n1[i] != undefined && n2[j] != undefined) {
      if (n1[i] <= n2[j]) {
        res.push(n1[i++]);
      } else {
        res.push(n2[j++]);
      }
    } else if (n1[i] != undefined) {
      res.push(n1[i++]);
    } else if (n2[j] != undefined) {
      res.push(n2[j++]);
    }

    start++;
  }

  return res;
};

// let arr1 = [1];
// let arr2 = [2, 3, 4];

// let res = combineTwoSortedArray(arr1, arr2);

// console.log(res);
