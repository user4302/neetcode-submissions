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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // use 2 pointers
        // fast and slow
        let slow = head;
        let fast = head;

        // fast will start by moving forward the distance n
        // only way to assign the fast pointer to a node in the front is with a loop
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        // there is an edge case, where n will ask the head to be removed,
        // in this scenario, we simply return the node after the head
        if (fast === null) {
            return head.next;
        }

        // keep moving both pointers forward until fast reaches the end
        while (fast.next !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // slow will be just before the node that should be removed
        // then we update the node with the slow pointer
        // to point to the node after the next node (current.next = current.next.next)
        slow.next = slow.next.next;

        // we return the head because the assignment to slow in the beginnign is
        // a reference, not a value.
        // andsince we skipped over the requested value 
        // we can return head which will have everything except the skipped node
        return head
    }
}
