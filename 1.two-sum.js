/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (seen.has(compliment)) {
            return [seen.get(compliment), i]
        }
        seen.set(nums[i], i)
    }
};
// @lc code=end
//speed 85%
//memory 20%

