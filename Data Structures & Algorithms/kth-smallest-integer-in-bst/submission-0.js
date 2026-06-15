class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // ASSIGNMENT: We package the countdown target 'k' and a placeholder '0' 
            // into a standard array.
        // WHY: JavaScript passes primitives (numbers) by value, but arrays by reference. 
            // Wrapping them in an array allows all nested recursive frames to read 
            // and mutate the exact same memory slots.
        const tracker = [k, 0]; 
        
        // FUNCTION CALL: Invokes the recursive search engine.
        // INPUT: 
        //   - 'root': The absolute top starting node of the tree.
        //   - 'tracker': The reference array holding our [countdown, answer_placeholder].
        // OUTPUT: This function call executes purely for its side effects. 
            // It returns nothing (undefined), but upon completion, 
            // it guarantees that 'tracker' has been modified.
        this.dfs(root, tracker);
        
        // RETURN: Delivers the final extracted node value stored in tracker[1] 
            // back to the original caller.
        // WHY: The recursive DFS engine has completed its run, 
            // and tracker[1] now holds the verified target.
        return tracker[1];
    }

    dfs(node, tracker) {
        if (!node) return;

        // 1. Traverse Left
        // FUNCTION CALL: Recursively steps down to the left child.
        // INPUT:
        //   - 'node.left': The left child subtree (guaranteed to contain smaller values).
        //   - 'tracker': The same shared state array passed down from the parent frame.
        // OUTPUT: Explores the left lineage entirely. 
            // When it exits, the countdown in tracker[0] will be decreased 
            // by the number of valid sorted elements found down that left path.
        this.dfs(node.left, tracker);
        if (tracker[0] === 0) return; 

        // 2. Process Root Node
        // MUTATION: Decrements the remaining step counter in the shared memory space by 1.
        // WHY: An in-order traversal visits nodes in ascending order. 
            // Visiting this node means we have successfully checked off 
            // the next smallest element in the sorted sequence.
        tracker[0]--;
        
        if (tracker[0] === 0) {
            // ASSIGNMENT: Copies the current node's integer value 
                // into the second slot of our reference array.
            // WHY: tracker[0] hitting 0 means this specific node is 
                // exactly the k-th smallest element in the tree. 
                // We preserve it here so it can safely bubble up and out of the recursive stack.
            tracker[1] = node.val;
            return;
        }

        // 3. Traverse Right
        if (tracker[0] > 0) {
            // FUNCTION CALL: Recursively steps down to the right child.
            // INPUT:
            //   - 'node.right': The right child subtree (guaranteed to contain larger values).
            //   - 'tracker': The same shared state array passed down from the parent frame.
            // OUTPUT: Explores the right paths only if more sorted steps are required. 
                // Just like the left call, 
                // it returns nothing but mutates the tracker state dynamically.
            this.dfs(node.right, tracker);
        }
    }
}