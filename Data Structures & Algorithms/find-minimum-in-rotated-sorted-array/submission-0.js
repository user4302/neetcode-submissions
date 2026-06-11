class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        nums.sort((a,b)=>a-b)
        return nums[0]
    }
}
