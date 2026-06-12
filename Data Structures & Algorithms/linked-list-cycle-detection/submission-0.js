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
        let map = new Map()
        let current = head

        while (current !== null){
            if(map.has(current)){
                return true
            } else {
                map.set(current, current.next)
                current = current.next
            }
        }
        return false
    }
}
