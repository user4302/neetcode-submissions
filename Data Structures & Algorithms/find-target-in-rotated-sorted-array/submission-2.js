class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // let leftPointer = 0
        let rightPointer = nums.length - 1;
        for (let leftPointer = 0; leftPointer < nums.length; leftPointer++) {
            if (nums[leftPointer] === target) {
                return leftPointer;
            }

            if (nums[rightPointer] === target) {
                return rightPointer;
            } else {
                rightPointer=-leftPointer-1;
            }
        }
        return -1
    }
}
