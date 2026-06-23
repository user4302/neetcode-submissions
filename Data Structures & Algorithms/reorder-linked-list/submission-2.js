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
     * @return {void}
     */
    reorderList(head) {
        // we use 2 pointers
        // slow will go 1 step at a time
        let slowPointer = head;
        // fast will go 2 steps at a time
        let fastPointer = head;
        // this is done to find the middle of the linked list
        // by using a loop and stopping when fastPointer reaches the end
        // while (fastPointer.next) { ❌ fastPointer can land on null, meaning fastPointer.next doesn't exist.
        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        // and assign the next node (slowPointer.next) to secondHead
        let secondHead = slowPointer.next;
        // then we assign slowPointer.next to null,
        slowPointer.next = null;
        // so that the first half is separated from the second half

        // after this we reverse the second linked list
        let previousNode = null;
        let currentNode = secondHead;
        // this is done by using a while loop until the current node has no next node
        // while (currentNode.next) { ❌ stops the loop too early, leaving the very last node of the second half un-reversed.
        while (currentNode !== null) {
            // and we track 3 nodes at each step using currentNode, previousNode and nextNode
            // we stop the while loop when currentNode is null
            // initially previousNode=null, currentNode=secondHead, nextNode=currentNode.next
            let nextNode = currentNode.next;
            // previousNode + currentNode is defined before the while loop
            // nextNode is defined in each iteration of the while loop
            // at each step we make the following re-assignments
            // "back" is "left" "front" is "right"
            // currentNode.next=previousNode (convert back to front)
            currentNode.next = previousNode;
            // previousNode=currentNode (convert current to back)
            previousNode = currentNode;
            // currentNode=nextNode (convert front to current)
            currentNode = nextNode;
        }

        // at the end we weave both linked lists into 1
        // in a loop,
        // 💡 Reset two fresh track variables (p1 and p2) to point to the two separate list heads, 
        // and step them forward using the temp variables.
        let headOfHalf1 = head; // Head of the 1st half
        let headOfHalf2 = previousNode; // Head of the reversed 2nd half
        // while (slowPointer.next) { ❌ slowPointer.next = null right above, so this loop never executes.
        while (headOfHalf2 !== null) {
            // while keeping track of the next node for the first and second lists in temp variables
            // let firstListNodeNext = slowPointer.next; ❌ slowPointer.next = null right above
            let firstListNodeNext = headOfHalf1.next;
            // let secondListNodeNext = secondHead.next; ❌ secondHead is now the tail of the reversed list. use previousNode (the new reversed head).
            let secondListNodeNext = headOfHalf2.next;
            // because we would lose them when assigning the other list's node.
            // we use these temp saved nodes to assign the .next node
            // we start with the original head which is now only the first half
            // we then procedd to assign the next and current node
            // slowPointer.next = secondListNodeNext; ❌
            // slowPointer.next.next = firstListNodeNext; ❌

            // Connect Left to Right
            headOfHalf1.next = headOfHalf2;
            // Connect Right to the next Left
            headOfHalf2.next = firstListNodeNext;

            // Move your tracking pointers forward!
            headOfHalf1 = firstListNodeNext;
            headOfHalf2 = secondListNodeNext;
        }
    }
}
