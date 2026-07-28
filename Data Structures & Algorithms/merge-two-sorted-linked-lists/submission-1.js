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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // if 1 of the 2 nodes equals null, then simply return the other list
        if (list1 === null || list2 === null) return list1 ? list1 : list2;
        // if both are null, return null
        if (list1 === null && list2 === null) return null;

        // CRITICAL FIX: Ensure list1 is the head with the smaller value
        if (list1.val > list2.val) {
            // Swap list1 and list2 so list1 is always the smaller head
            [list1, list2] = [list2, list1];
        }

        // Assume list1 is the smaller head (swapped earlier if needed)
        let prev = list1; // The "previous" node in the merged chain
        let curr = list1.next; // The "current" node in the merged chain (to compare against)
        let nodeToInsert = list2; // The "next" value from list2 we are trying to place

        while (curr !== null && nodeToInsert !== null) {
            // Compare the value we are inserting (nodeToInsert)
            // with the current node in the chain (curr)
            if (nodeToInsert.val < curr.val) {
                // INSIDE: We need to insert nodeToInsert between prev and curr

                // 1. Save the "next" node of the list2 pointer (so we don't lose the rest of list2)
                let nextNodeToInsert = nodeToInsert.next;

                // 2. Perform the splice:
                //    - Point the new node to the current node in the chain
                nodeToInsert.next = curr;

                //    - Point the previous node to the new node
                prev.next = nodeToInsert;

                // 3. Advance the list2 pointer
                nodeToInsert = nextNodeToInsert;

                // 4. IMPORTANT:
                //    We just inserted a node. The 'prev' is now that new node.
                //    We do NOT advance 'curr' yet, because the new node might still be smaller than 'curr'.
                //    We just need to update 'prev' to be the node we just inserted.
                prev = prev.next;
            } else {
                // No insertion needed. The current chain node is smaller/equal.
                // Move both pointers forward.
                prev = curr;
                curr = curr.next;
            }
        }

        // If list2 still has nodes left, attach them
        if (nodeToInsert !== null) {
            prev.next = nodeToInsert;
        }

        return list1;
    }
}
