class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // NOTE: "non-decreasing" means that while it increases-
        // it can also have duplicates (does not decrease)

        // index[n][0] > index[n-1][0]

        // since we know the target,
        // and we know that each childs int-
        // starts greater than the previous childs ending int

        // we only need to check perhaps the first int of each child
        // and the moment that we find one thats greater than the target-
        // we can search the previous child for the target

        let found = false
        for (let row = 0; row < matrix.length; row++) {
            // if first val <= target and last val >= target
            if(matrix[row][0]<=target && matrix[row][matrix[row].length-1]>=target){
                return matrix[row].includes(target)
            }
        }
        return found
    }
}
