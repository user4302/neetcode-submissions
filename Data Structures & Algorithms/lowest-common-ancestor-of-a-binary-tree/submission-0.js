/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // BASE CASE 1: If we hit a null node, return null (not found).
        // BASE CASE 2: If we find p or q, we return that node up the stack.
        // This essentially says: "I found a target, pass it back up!"
        if (!root || root === p || root === q) {
            return root;
        }

        // RECURSIVE STEP:
        // Dive deep into the left and right subtrees to look for p or q.
        const left = this.lowestCommonAncestor(root.left, p, q);
        const right = this.lowestCommonAncestor(root.right, p, q);

        // DECISION STEP:
        // If both 'left' and 'right' are not null, it means:
        // 1. One target (p) is in the left subtree.
        // 2. The other target (q) is in the right subtree.
        // Therefore, the current 'root' must be the split point—the LCA.

        // If only one side returned a node, that node is either the LCA found
        // further down, or one of the targets we are currently propagating upwards.
        return left && right ? root : left || right;
    }
}
