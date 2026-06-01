class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // create a set, which can not contain duplicates
        const setNums = new Set();

        // iterate the array
        for (const num of nums) {

            // if the set contains the current value,
            // this is a duplicate
            if (setNums.has(num)) {

                // so return true
                return true;
            }

            // else add the current value to the set
            setNums.add(num);
        }

        // if no values are found in the set,
        // there are no duplicates
        return false;
    }
}
