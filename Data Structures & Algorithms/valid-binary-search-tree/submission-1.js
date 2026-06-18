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
        return this.isValidNode(-Infinity, root, Infinity)
    }

    // it will accept the left boundary, the current root, and the right boundary
    isValidNode(leftBound, currentNode, rightBound) {
        // first check if node is null or not
        // and pass true if null since a null node is stil a valid node
        if (currentNode === null) return true;

        // if the current node value is 
        // less than the left bound or 
        // greater than the right bound,
        // return false as this is an invalid BST
        if (currentNode.val <= leftBound || currentNode.val >= rightBound) return false;

        // comparison: the value before the
        // last left turn is the upper bound and the
        // last right turn is the lower bound
        return(this.isValidNode(leftBound, currentNode.left, currentNode.val) &&
            this.isValidNode(currentNode.val, currentNode.right, rightBound)
        )
    }
}
