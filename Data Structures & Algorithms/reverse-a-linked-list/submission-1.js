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
     * @return {ListNode}
     */
    reverseList(head) {
        // right is preserved
        // right becomes left
        // left becomes middle
        // middle becomes right
        // repeats until middle is null

        // previous node will be null because the newLastNode.next should be null
        let previousNode = null;
        // current node is basically the head for now since this is where we start
        let currentNode = head;

        // loop until the current node is null, 
        // because this means that we have gone past the last node
        while (currentNode !== null) {
            // first we assign the current nodes next node to a variable
            // this way we can use this variable 
            // and also reassign the current nodes next node
            let nextNode = currentNode.next;

            // then we assign the previous node to the current nodes next pointer
            // so that the direction gets reversed,
            // and also we can reassign the previous node
            currentNode.next = previousNode;

            // we assign the current node to the previous node variable
            // because we move "forward"
            // and the new previous node becomes the previous current node
            previousNode = currentNode;

            // and the new current node becomes the previous current nodes next node pointer
            currentNode = nextNode;
        }

        // at the end we return previous node,
        // as this will end up being the new head
        // which is the old last node
        return previousNode
    }
}