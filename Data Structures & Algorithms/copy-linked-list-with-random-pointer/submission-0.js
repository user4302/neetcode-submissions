/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 * this.val = val;
 * this.next = next;
 * this.random = random;
 * };
 */

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        // Using a standard JavaScript Map where keys are the original node objects
        const nodeMap = new Map();

        // Clone all nodes and store them in the map
        let current = head;
        while (current !== null) {
            // to the map we assign the key as the old node (current)
            // and the value as a new node
            // ^ this logic is important for the next loop
            // the new node has {current.val, null, null}
            nodeMap.set(current, new Node(current.val));
            // similar to i++
            // we move onto the next node based on the pointer on the current node
            current = current.next;
        }

        // Connect the next and random pointers for the copies
        current = head;
        while (current !== null) {
            // assign the new node
            // we pass the old node as the key
            // and receive the new node
            const cloneNode = nodeMap.get(current);
            
            // we get the memory address of the old node's .next memory address (oldNext)
            // and use that to get the new node that has that key (oldNext -> abc)
            // and assign it to new node.next
            // same for .random
            cloneNode.next = nodeMap.get(current.next) || null;
            cloneNode.random = nodeMap.get(current.random) || null;
            
            current = current.next;
        }

        // Return the clone of the original head node
        return nodeMap.get(head);
    }
}