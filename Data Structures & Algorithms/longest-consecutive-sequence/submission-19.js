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
        // console.log("numsSet", numsSet);
        if (numsSet.size < 1) return 0;
        if (numsSet.size < 2) return 1;

        // loop through items
        for (const num of numsSet) {
            if (numsSet.has(num - 1)) {
                continue;
            } else if (numsSet.has(num + 1)) {
                let currentNum = num;
                let currentLength = 1;
                while (numsSet.has(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                }

                longestConsecutiveSequence =
                    longestConsecutiveSequence > currentLength
                        ? longestConsecutiveSequence
                        : currentLength;
            } else {
                // If the number has no left neighbor 
                // AND no right neighbor, 
                // it is a sequence of length 1.
                // We only update our global record if 
                // we haven't already found a longer sequence.
                if (longestConsecutiveSequence === 0) {
                    longestConsecutiveSequence = 1;
                }
            }
        }
        return longestConsecutiveSequence;
    }
}
