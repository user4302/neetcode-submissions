class Solution {
    /**
     * WHAT: Computes the minimum time steps needed to execute all tasks with a cooldown constraint 'n'.
     * WHY: Treats the schedule as a geometric grid framed by the highest-frequency tasks,
     * calculating total intervals mathematically in O(1) space rather than simulating time cycles.
     * INPUT: tasks (character[]), n (number)
     * OUTPUT: number - The absolute minimum time intervals required
     */
    leastInterval(tasks, n) {
        const counts = new Array(26).fill(0);

        // WHY: Dynamically calculate the offset from 'A' without needing to memorize ASCII numbers.
        const baseCode = "A".charCodeAt(0);

        // WHY: Translate string characters ('A'-'Z') into direct, sequential array indices (0-25).
        // METAPHOR: Think of this as sorting 26 distinct colored physical buckets to count the inventory of each task.
        for (const t of tasks) {
            counts[t.charCodeAt(0) - baseCode]++;
        }

        // WHY: Identify the highest frequency value, which defines the structural constraint.
        // METAPHOR: This defines the absolute 'HEIGHT' of our geometric schedule matrix.
        const maxf = Math.max(...counts);

        // WHY: Count how many distinct task types share that exact maximum frequency.
        // METAPHOR: This represents the number of elements trailing on the very bottom row of the matrix.
        const maxCount = counts.filter((f) => f === maxf).length;

        // METAPHOR Blueprint: "The Hard-Shell Suitcase vs. Clothes Volume"
        // 1. (maxf - 1): The height of the grid. We subtract 1 because the final row doesn't trigger trailing idles.
        // 2. (n + 1): The width of each block row (1 slot for the task item + n mandatory cooldown/idle slots).
        // 3. + maxCount: Appends the extra tasks executing sequentially on the very last partial row.
        //
        // VISUAL GRID MATRIX LAYOUT:
        // Row 1: [ MaxTask1 ] [ MaxTask2 ] [ idle/other ] ... (Width = n + 1)
        // Row 2: [ MaxTask1 ] [ MaxTask2 ] [ idle/other ] ... (Width = n + 1)
        // Last : [ MaxTask1 ] [ MaxTask2 ]                     (Width = maxCount)
        //
        // WHY: Math.max compares the exact size of this customized "hard-shell suitcase" vs the raw volume of 
        // our "clothes" (tasks.length). If clothes overflow the frame, we stretch rows dynamically without idles.
        return Math.max(tasks.length, (maxf - 1) * (n + 1) + maxCount);
    }
}