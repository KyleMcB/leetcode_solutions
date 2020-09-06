/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node   = new ListNode;
    let result = node; // keep a reference to the beginning to return
    let carry  = 0;
    if (l1)
    {
        node.val += l1.val;
    }
    if (l2)
    {
        node.val += l2.val;
    }
    if (node.val > 9)
    {
        carry    = 1;
        node.val = node.val % 10;
    }
    l2 = l2.next;
    l1 = l1.next;
    while (l1 || l2 || carry)
    {
        node.next = new ListNode;
        node      = node.next;
        if (l1)
        {
            node.val += l1.val;
        }
        if (l2)
        {
            node.val += l2.val;
        }
        if (carry)
        {
            node.val += 1;
            carry = 0;
        }
        if (node.val > 9)
        {
            node.val = node.val % 10;
            carry    = 1;
        }
        if (l2)
            l2 = l2.next;
        if (l1)
            l1 = l1.next;
    }
    return result;
};
// this one gave me some trouble. I wanted to be really clever and much more concise.
// speed 57%
// memory 21%
// not great. Took me an hour to solve. I'm rusty
// @lc code=end
