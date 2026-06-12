/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // define variables
        let answer = new ListNode();
        let currentSum = answer;
        let carry = 0;
        // start while loop
        while (l1 !== null || l2 !== null || carry !== 0) {
            // assign values based on availablity
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;
            // add numbers + and carry over
            let sum = val1 + val2 + carry;
            // add any carry over to a variable
            // divide by 10 to isolate the 10s digit
            // then floor to isolate the 1s digit
            // so that we can carry forwad the 10s to add to the next value
            carry = Math.floor(sum / 10);
            // divide by 10
            // assign the remiander
            // because we can only store single digit numbers for this problem
            sum = sum % 10;
            // add to new linked list
            currentSum.next = new ListNode(sum);
            // bump to next node
            currentSum = currentSum.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        // because the first node is empty 
        // we start with the second node
        return answer.next;
    }
}
