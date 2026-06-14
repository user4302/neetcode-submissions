class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Initialize the stack with the root nodes of both trees to start comparison
        // We store them as a pair [node1, node2]
        const stack = [[p, q]];

        while (stack.length) {
            // Pop the current pair of nodes to compare
            const [node1, node2] = stack.pop();

            // Success base case: If both nodes are null, 
            // we reached the end of this branch safely.
            // 'continue' skips to the next iteration of the while loop.
            if (!node1 && !node2) continue;

            // Failure base cases:
            // 1. One is null and the other isn't (Structural mismatch)
            // 2. Both exist, but their values are different (Data mismatch)
            if (!node1 || !node2 || node1.val !== node2.val) {
                return false;
            }

            // If we are here, the nodes match. Add their children to the stack.
            // Because it's a stack (LIFO), pushing right then left means we process 
            // the left subtree first.
            stack.push([node1.right, node2.right]);
            stack.push([node1.left, node2.left]);
        }

        // If the stack becomes empty, it means we traversed all nodes and found no mismatches.
        return true;
    }
}