/**
 * 1. Two Sum
 * Given an array of integers nums & an integer target, return the indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution & you may not use the same element twice.
 * You can return the answer in any order.
 *
 * ex: input: nums = [2, 7, 11, 15], target = 9
 * output: [0,1]
 */

/**
 * @param { numbers[] } nums
 * @param { number } target
 * @return { numbers[] }
 */
export var twoSum = (nums, target) => {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const req = target - nums[i];
    if (hash.has(req)) {
      return [hash.get(req), i];
    }

    hash.set(nums[i], i);
  }
};
