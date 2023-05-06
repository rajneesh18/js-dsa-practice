/**
 * 2626: Array Reduce Transformation
 * Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
 *
 * A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
 *
 * If the length of the array is 0, it should return init.
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
export var reduce = (arr, fn, init) => {
  if (arr.length == 0) return init;

  let val = init;
  for (let key of arr) {
    val = fn(val, key);
  }

  return val;
};
