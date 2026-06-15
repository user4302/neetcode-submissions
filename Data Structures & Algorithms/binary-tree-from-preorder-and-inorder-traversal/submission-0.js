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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // ASSIGNMENT: Tracks our current position as we read nodes out of the preorder array.
        // WHY: Preorder traversal is always Root -> Left -> Right. 
            // Every time we build a new node, we can simply look at this index 
            // to find the next root value.
        let pre_idx = 0;

        // ASSIGNMENT: Build a lookup dictionary matching inorder values to their array indices.
        // WHY: It converts an O(N) linear search into an O(1) constant-time lookup, 
            // protecting the overall algorithm from degrading 
            // to an inefficient O(N^2) time complexity.
        let indices = new Map();
        inorder.forEach((val, i) => indices.set(val, i));

        // FUNCTION HOIST: Inner recursive DFS engine that handles the boundary tracking.
        // INPUT: 
        //   - 'l': The left-side boundary index of our current subtree inside the inorder array.
        //   - 'r': The right-side boundary index of our current subtree inside the inorder array.
        // OUTPUT: Returns a fully assembled TreeNode subtree link.
        function dfs(l, r) {
            // Base Case: If the left boundary cross-passes the right boundary, this path is empty.
            if (l > r) return null;

            // ASSIGNMENT: Extract the current root value from preorder 
                // and increment our position counter.
            // WHY: pre_idx++ ensures the next deeper execution frame moves on 
                // to the next unique root element.
            let root_val = preorder[pre_idx++];

            // ASSIGNMENT: Instantiates a concrete TreeNode memory block 
                // using our discovered root value.
            // WHY: This node serves as the parent anchor 
                // that our left and right recursive branches will attach to.
            let root = new TreeNode(root_val);

            // ASSIGNMENT: Look up exactly where this root value sits 
                // inside the inorder sequence.
            // WHY: This split index dictates how many numbers belong 
                // to the left child vs. the right child.
            let mid = indices.get(root_val);

            // FUNCTION CALL: Recursively constructs the left subtree.
            // INPUT: The boundaries are restricted from our current 
                // left 'l' up to 'mid - 1'.
            // OUTPUT: Assigns the resulting fully assembled 
                // left sub-branch to root.left.
            root.left = dfs(l, mid - 1);

            // FUNCTION CALL: Recursively constructs the right subtree.
            // INPUT: The boundaries are restricted from 'mid + 1' 
                // up to our current right 'r'.
            // OUTPUT: Assigns the resulting fully assembled 
                // right sub-branch to root.right.
            root.right = dfs(mid + 1, r);

            // RETURN: Delivers the current completed node 
                // (along with its attached children) back up to its parent.
            // WHY: This specific subtree slice has been completely resolved.
            return root;
        }

        // RETURN: Fires off the initial DFS run covering the entire range of the inorder array.
        // WHY: This kicks off the recursive chain reaction that outputs the final root node.
        return dfs(0, inorder.length - 1);
    }
}