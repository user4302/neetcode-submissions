class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // we initiate it like this to reserve the array in memory
        let output = Array(nums.length).fill(0);

        // took some time to understand, but its basically;
        // multiple everything except the current index's value

        for (let i = 0; i < nums.length; i++) {
            // perhaps we can store repeating products somehow

            // but the brute force method is as follows;
            // filter out the current index
            // multiple all other values and return
            // this will be assigned into output[i]
            output[i] = nums
                .filter((_, index) => index !== i)
                .reduce((acc, val) => acc * val, 1);
        }
        return output
    }
}
