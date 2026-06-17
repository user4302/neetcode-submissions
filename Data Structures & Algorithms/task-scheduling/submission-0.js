class Solution {
    /**
     * Calculates the minimum total units of time required to execute all tasks
     * given a mandatory cooldown interval 'n' between identical tasks.
     * * Strategy: Greedy Structural Math ($O(M)$ Time, $O(1)$ Space)
     * * @param {character[]} tasks - Array of CPU tasks represented by uppercase letters A-Z
     * @param {number} n - Cooldown distance required between two identical tasks
     * @return {number} - The absolute minimum intervals/units of time needed
     */
    leastInterval(tasks, n) {
        // 1. Allocate a fixed-size frequency map for uppercase English letters A-Z.
        // Space Invariant: O(1) auxiliary space because the alphabet size 
            // is strictly bounded at 26.
        const counts = new Array(26).fill(0);
        
        // 2. Populate frequencies. Convert character to ASCII, mapping 'A' (65) to index 0.
        // Time Invariant: O(M) where M is the total number of elements in the tasks array.
        for (const t of tasks) counts[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        
        // 3. Identify the frequency of the most demanding task(s) (the structural bottleneck).
        // e.g., If tasks = [A, A, A, B, B], maxf = 3 (for task A).
        const maxf = Math.max(...counts);
        
        // 4. Count how many distinct task types share this maximum bottleneck frequency.
        // e.g., If tasks = [A, A, A, B, B, B], both A and B have frequency 3, so maxCount = 2.
        // This represents the number of tasks that will sit in the very last row 
            // of our execution grid.
        const maxCount = counts.filter(f => f === maxf).length;
        
        // 5. Compute the structural grid size and guard against overflow.

        // Math Breakout:
        // - (maxf - 1): The number of fully filled execution blocks. 
            // The last instance doesn't force a cooldown.
        // - (n + 1): The total width of each block 
            // (1 task slot + n mandatory cooldown/idle slots).
        // - + maxCount: Appends the trailing tasks executing sequentially 
            // in the final partial block.

        // The Math.max Guard:
        // - If we have an abundance of unique low-frequency tasks, 
            // they will completely fill all available 
            // idle slots and overflow. When they overflow, they require zero idles, 
            // meaning total time simplifies perfectly to the absolute count of tasks: 
            // tasks.length.
        return Math.max(tasks.length, (maxf - 1) * (n + 1) + maxCount);
    }
}