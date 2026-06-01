class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // add the array to a set
        // then compare the lengths of each
        // if the set is smaller then there were duplicates
        return new Set(nums).size < nums.length;
    }
}