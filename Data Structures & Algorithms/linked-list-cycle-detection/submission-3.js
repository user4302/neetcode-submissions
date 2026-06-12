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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // define 2 speeds so that we can look ahead 
        // and compare the fats node with the slow node 
        // and reach a result sooner
        let fast = head;
        let slow = head;

        // we only check fast and fast.next
        // so that we can check the existence of a node before the next assignment
        while (fast !== null && fast.next !== null) {
            // fast takes 2 steps
            // slow takes 1 step
            // fast will keep taking 2 steps till the end
            fast = fast.next.next;
            slow = slow.next;

            // this means that the fast pointer went a full round
            // and came back and met the slow pointer
            if (fast === slow) {
                return true;
            }
        }

        // the fast pointer reached the end of the linked list
        // therefore no cycle exists
        return false;
    }
}
