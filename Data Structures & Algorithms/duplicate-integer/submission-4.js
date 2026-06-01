class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // sort the array to make sure that any similar values
        // are next to each other
        nums=nums.sort((a,b)=>a-b)

        // loop through list starting from the second value 
        // (index 1), so that i can easily compare the starting 
        // value wit the previous value
        for(let i=1; i<nums.length; i++){

            // if the curent index value 
            // equals the previous index value
            if(nums[i]===nums[i-1]){

                // return
                return true
            }
        }
        
        // ekswe retuern false a sthere is no duplicate
        return false
    }
}
