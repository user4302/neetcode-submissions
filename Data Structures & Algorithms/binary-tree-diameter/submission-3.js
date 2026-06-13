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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        // Use a single-element array to pass the maximum diameter tracker by reference.
        // This allows all recursive execution frames to read and update the same global state.
        const res = [0];
        
        // Execute the bottom-up depth-first search helper starting at the root node.
        this.dfs(root, res);
        
        // Return the maximum diameter recorded during the traversal.
        return res[0];
    }

    /**
     * @param {TreeNode} root
     * @param {number[]} res
     * @return {number}
     */
    dfs(root, res) {
        // Base Case: If the current node is null, 
        // it represents an empty subtree with a height of 0.
        if (root === null) return 0;
        
        // Recursively calculate the maximum height of the left and right child subtrees.
        const left = this.dfs(root.left, res);
        const right = this.dfs(root.right, res);
        
        // Calculate the longest path (diameter) that uses the current node 
        // as the highest turning point.
        // If this combined path length exceeds the current global maximum, 
        // update the tracker.
        res[0] = Math.max(res[0], left + right);
        
        // Return the maximum height of the current node's subtree 
        // back to its parent call frame.
        // We take the larger height of the two child subtrees 
        // and add 1 to include the current node.
        return 1 + Math.max(left, right);
    }
}