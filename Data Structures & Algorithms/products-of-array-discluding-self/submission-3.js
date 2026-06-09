// Cleaner implimentation
// Same time complexity

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        let output = new Array(length).fill(0);

        let prefix = new Array(length);
        let suffix = new Array(length);

        // 1. Pass 1: Build the Prefix array (Left to Right)
        prefix[0] = 1; // Base case: nothing to the left of the first element
        for (let i = 1; i < length; i++) {
            // Take the number to the left, and multiply it by the left's accumulated prefix
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        // 2. Pass 2: Build the Suffix array (Right to Left)
        suffix[length - 1] = 1; // Base case: nothing to the right of the last element
        for (let i = length - 2; i >= 0; i--) {
            // Take the number to the right, and multiply it by the right's accumulated suffix
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }

        // 3. Pass 3: Combine them into the output array
        for (let i = 0; i < length; i++) {
            output[i] = prefix[i] * suffix[i];
        }

        return output;
    }
}

