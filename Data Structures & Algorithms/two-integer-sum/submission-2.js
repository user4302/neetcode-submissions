class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // this will be used to map each number in the array with its index
        const map = {}

        for (let i = 0; i < nums.length; i++) {

            // the difference is basically the missing number needed to reach the target value
            const difference = target - nums[i]

            // if the differnece that we need is in our map, then we found the missing value
            if (map[difference] !== undefined) {
                
                // so we return the current index, adn the index of the missing value that helps the current index become the target
                return [i, map[difference]]
            }

            // else we simply add the current value and its index to the map to use in the next iteration
            map[nums[i]] = i
        }
    }
}
