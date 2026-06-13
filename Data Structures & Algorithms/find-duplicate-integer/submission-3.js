class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Initialize both pointers at the starting index
        let slow = 0;
        let fast = 0;

        // --- PHASE 1: Find the meeting point inside the cycle ---
        // We use a do-while loop because they start at the same position (0)
        // this will end when fast and slow are the same index
        // and it WILL occur as its mathematically impossible to not (in this problem)
        do {
            slow = nums[slow];          // Moves 1 step
            fast = nums[nums[fast]];    // Moves 2 steps of varying sizes each
        } while (slow !== fast);
        // we cant stop and return the matched value found here
        // because it is possible that the match occured
        // simply because fast completed one loop lap
        // and went through the loop start and met the slow pointer
        // and then they get redirected to the same destination 
        // leading the while loop to stop
        // similar to if they both started on index zero in thefirst loop (code bug)

        // --- PHASE 2: Find the entrance of the cycle (the duplicate) ---
        // Reset one pointer back to the very beginning
        // to make use of the geometric truth in phase 2 
        slow = 0;

        // Move both pointers at the exact same speed (1 step)
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        // this time the starting indexes are compared first,
        // and then the values of these starting indexes (im using visual phrasing)
        // in case slow[0] and fast[current] have the same values
        // and here, Phase 2 is guaranteed to work because of a beautiful geometric truth: 
            // The distance from the starting line to the loop entrance 
            // is exactly equal to the distance from the Phase 1 crash site 
            // to the loop entrance (plus or minus a few full laps around the track).
                // startingIndex2loopSTARTIndexDistance ===
                // crashIndex2loopSTARTindexDistance(backwards) ===
                // crashIndex2loopENDindex

        // The point where they meet again is the duplicate number
        return slow;
    }
}