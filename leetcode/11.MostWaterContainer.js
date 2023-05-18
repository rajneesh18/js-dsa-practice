/**
 * 11. Container With Most Water
 */

/**
 * @param {number[]} height
 * @return {number}
 */
export var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l < r) {
    let minHeight = Math.min(height[l], height[r]);
    max = Math.max(max, minHeight * (r - l));
    if (height[l] < height[r]) l++;
    else r--;
  }

  return max;
};

// let height = [1, 1];
// console.log(maxArea(height));
