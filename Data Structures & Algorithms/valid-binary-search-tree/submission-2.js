/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        // use a recurrign function
        // start by passing the root and -infinity and +infinity
        // we initially pass infinity as there is no parent node to compare against
        // and infinity is the currnt boundary
        return this.isValidNode(-Infinity, root, Infinity);
    }

    // it will accept the left boundary, the current node, and the right boundary
    isValidNode(lastRightTurnValue, currentNode, lastLeftTurnValue) {
        // first check if node is null or not
        // and pass true if null since a null node is stil a valid node
        if (currentNode === null) return true;

        // if the current node value is
        // less than the last right turn or
        // greater than the last left turn
        // return false as this is an invalid BST

        // 10  <-- Window: (-Infinity, 20,  Infinity)
        //  \
        //   15  <-- Went RIGHT. New lastRightTurnValue = 10. Window: (10, 25, Infinity)
        //  /
        // 8  <-- Went LEFT. New lastLeftTurnValue = 15. Window: (10, 8, 15)
        //  TRUE

        //    30  <-- Window: (-Infinity, 20, Infinity)
        //   /
        // 10  <-- Went LEFT. New lastLeftTurnValue = 20. Window: (-Infinity, 10, 20)
        //   \
        //    25  <-- Went RIGHT. New lastRightTurnValue = 10. Window: (10, 25, 20)
        //  FALSE

        if (currentNode.val <= lastRightTurnValue || currentNode.val >= lastLeftTurnValue)
            return false;

        return (
            this.isValidNode(lastRightTurnValue, currentNode.left, currentNode.val) &&
            this.isValidNode(currentNode.val, currentNode.right, lastLeftTurnValue)
        );
    }
}
