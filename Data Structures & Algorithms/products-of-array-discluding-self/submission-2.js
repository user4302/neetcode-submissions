class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // we initiate it like this to reserve the array in memory
        let output = Array(nums.length).fill(0);

        // These will be sed to multiply progessively
        // from the left and right
        let prefix = Array(nums.length).fill(0);
        let suffix = Array(nums.length).fill(0);

        prefix[0] = 1;
        suffix[nums.length-1] = 1;

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i-1] * prefix[i-1];
            // console.log("prefix", prefix);
            suffix[nums.length-i-1] = nums[nums.length-i] * suffix[nums.length-i];
            // console.log("suffix", suffix);
        }
        for (let i = 0; i < output.length; i++) {
            // assign the product
            output[i] = prefix[i] * suffix[i];
            // console.log("output", output);
        }
        return output;
    }
}
