class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // add all values into a set to isolate unique values
        // and check value existemce without time complexity
        let numsSet = new Set(nums);
        let longestConsecutiveSequence = 0;
        
        if (numsSet.size < 1) return 0;
        if (numsSet.size < 2) return 1;

        // loop through items
        for (const num of numsSet) {
            // simply check the opposite 
            // and eliminate the need for
            // an else if or else block
            if (!numsSet.has(num - 1)) {
                let currentLength = 1;
                // simply use the currentLength 
                // and num from the parent
                // instead of making a new variable for num
                while (numsSet.has(num + currentLength)) {
                    currentLength++;
                }

                longestConsecutiveSequence = Math.max(
                    longestConsecutiveSequence, currentLength
                );
            }
        }
        return longestConsecutiveSequence;
    }
}
