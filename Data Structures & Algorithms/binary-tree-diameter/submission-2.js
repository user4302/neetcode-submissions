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
        // We use an array box [0] so it acts as a global scoreboard passed by reference.
        // Every deep recursive step can see and overwrite this exact same memory slot.
        const res = [0];
        
        // Kick off our bottom-up helper search starting from the very top root node.
        this.dfs(root, res);
        
        // Once every single manager is done checking the board, return the final record.
        return res[0];
    }

    dfs(root, res) {
        // Base Case: If we hit an empty field beyond a leaf, its height is 0 steps.
        if (root === null) return 0;
        
        // Delegate to our left and right workers. We pause right here and wait for them 
        // to return a single integer representing the max straight drop of their territories.
        const left = this.dfs(root.left, res);
        const right = this.dfs(root.right, res);
        
        // calculate the end-to-end wingspan crossing through us.
        // If this combined path beats the current global record, we overwrite the scoreboard.
        res[0] = Math.max(res[0], left + right);
        
        // pick our single tallest branch available, add 1 step
        // to account for the physical link to our parent function, 
        // and pass that height up the chain.
        return 1 + Math.max(left, right);
    }
}