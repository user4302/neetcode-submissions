class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Sort the array ascending so left is smaller and right is larger.
        nums.sort((a, b) => a - b);

        let results = [];

        // In a for loop we start with the first value as our anchor, this is i.
        for (let i = 0; i < nums.length; i++) {
            // SKIP RULE 1: If this anchor 'i' is the same as the previous number,
            // skip it entirely to avoid building identical triplet combinations.
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Initialize boundaries relative to i:
            // j starts at index i + 1
            let j = i + 1;
            // k starts at the very last index
            let k = nums.length - 1;

            // Run an inner loop while j is less than k:
            while (j < k) {
                // Sum up the 3 values at indexes i, j, and k.
                let sum = nums[i] + nums[j] + nums[k];
                // IF the sum is exactly zero:
                if (sum === 0) {
                    // We found a triplet! Push it to our result array.
                    results.push([nums[i], nums[j], nums[k]]);
                    // Move BOTH j to the right and k to the left to keep scanning.
                    j++;
                    k--;
                    // SKIP RULE 2: Continuously slide j forward if it matches its previous value
                    // to make sure we don't process a duplicate combination.
                    while (j < k && nums[j] === nums[j - 1]) j++;
                }
                // ELSE IF sum > 0 (too big):
                else if (sum > 0) {
                    // Move k to the left to decrease the total sum.
                    k--;
                } else {
                    // ELSE (sum < 0, too small):
                    // Move j to the right to increase the total sum.
                    j++;
                }
            }
            // When j reaches or crosses k, the inner pass ends.
            // Move i 1 index up, and redo the process
            // with j starting at i + 1 and k at the last index.
        }
        return results;
    }
}
