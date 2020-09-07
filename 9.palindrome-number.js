/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// note, my goal is more learning and practice the javascript standard library than
// creating a bitwise algo that checks if a number is palindrome
var isPalindrome = function(x) {
    if (x < 0)
        return false;
    let numberString    = x.toString();
    let numberRevString = Array.from(x.toString()).reverse().join('');
    return numberRevString === numberString;
};
// @lc code=end
// speed 61%
// memory 51%
// definitely room for improvement if I implemented something bitwise
