/**
 * Definition for a binary tree node.
 * class TreeNode {
 * constructor(val = 0, left = null, right = null) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // The helper function returns the height of the tree if balanced, 
        // or -1 if unbalanced.
        // If the return value is not -1, 
        // the entire tree is structurally balanced.
        return this.dfs(root) !== -1;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    dfs(root) {
        // Base Case: An empty subtree has a height of 0 and is inherently balanced.
        if (root === null) return 0; 

        // Recursively check the left child subtree. 
        // If it returns -1, 
        // an unbalance was detected below; 
        // propagate -1 up to the parent call frame.
        const left = this.dfs(root.left);
        if (left === -1) return -1; 

        // Recursively check the right child subtree. 
        // If it returns -1, 
        // propagate the -1 up immediately without processing the current node.
        const right = this.dfs(root.right);
        if (right === -1) return -1; 

        // Local structural check: 
        // If the absolute height difference between the left and right 
        // subtrees is strictly greater than 1, 
        // the current subtree is unbalanced. 
        // Return -1.
        if (Math.abs(left - right) > 1) {
            return -1; 
        }

        // If the current node's subtree is balanced, 
        // calculate and return its total height to the 
        // parent call frame by taking the maximum child height 
        // and adding 1 for the current node.
        return 1 + Math.max(left, right);
    }
}