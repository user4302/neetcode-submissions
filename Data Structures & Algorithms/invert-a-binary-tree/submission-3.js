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
     * @return {TreeNode}
     */
    invertTree(root) {
        // return null if the input is null since there will be no child nodes
        if (!root) return null;

        let queue = [root];

        while (queue.length > 0) {
            let latestNode = queue.pop();

            // check if it has a left child or a right child,
            // and then switch the two
            // if(latestNode.left !== null || latestNode.right !== null){

            // we do not bother checking if the node is null or not,
            // we simply swap regardless, for simpliciy and due to lack of harm
            const tempLeftNode = latestNode.left;
            latestNode.left = latestNode.right;
            latestNode.right = tempLeftNode;

            // queue.push(latestNode.left)
            // queue.push(latestNode.right)
            // }
            
            // push to the queue only if the node is not null
            if (latestNode.left) queue.push(latestNode.left);
            if (latestNode.right) queue.push(latestNode.right);
        }
        return root;
    }
}
