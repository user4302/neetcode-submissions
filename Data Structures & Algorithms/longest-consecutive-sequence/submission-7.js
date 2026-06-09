class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        // the brute forse mehtod would be to
        // sort the array and use a set to get unique values
        // making just a new set results in an object,
        // therefore use spread to turn in back into an array
        const sortedSetNums = [...new Set(nums)].sort((a, b) => a - b);
        console.log("sortedSetNums= ", sortedSetNums);
        if (sortedSetNums.length === 1) return 1;
        let largestSequenceCount = 0;
        let countAtEachStep = 0;

        for (let i = 0; i < sortedSetNums.length; i++) {
            console.log("i= ", i);
            // then check the diference between each value starting from index 0
            if (
                sortedSetNums[i] ===
                sortedSetNums[i + 1] - 1
                // sortedSetNums[i] - 1 === sortedSetNums[i - 1]
            ) {
                console.log("if",);
                console.log("sortedSetNums[i]= ", sortedSetNums[i]);
                // console.log("ortedSetNums[i] + 1", sortedSetNums[i] + 1);
                console.log("sortedSetNums[i + 1] - 1= ", sortedSetNums[i + 1] - 1);
                // and add the count to a variable at eachstep
                countAtEachStep++;
                console.log("countAtEachStep= ", countAtEachStep);
                // and compare it with the one in the variable at eachstep
                // and replace the value in the variable only if the current count is larger
                if (countAtEachStep > largestSequenceCount) largestSequenceCount = countAtEachStep;
                console.log("largestSequenceCount= ", largestSequenceCount);
                // and if it fails the check, start a new counter
            } else if (sortedSetNums[i] === sortedSetNums[i - 1]) {
                console.log("else if",);
                console.log("sortedSetNums[i]= ", sortedSetNums[i]);
                console.log("sortedSetNums[i + 1]= ", sortedSetNums[i + 1]);
                countAtEachStep++;
                console.log("countAtEachStep= ", countAtEachStep);
                if (countAtEachStep > largestSequenceCount) largestSequenceCount = countAtEachStep;
                console.log("largestSequenceCount= ", largestSequenceCount);
            } else {
                console.log("else",);
                countAtEachStep = 0;
            }
        }
        // and a the end return the value in the variable
        return largestSequenceCount+1;
    }
}

// the if/ else if condiotns need to be fixed, 
// they somehow prevent the incrementing of the largestSequenceCount
// this issue 
