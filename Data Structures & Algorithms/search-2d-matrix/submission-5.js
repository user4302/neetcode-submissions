class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // same as before, but replacing `.includes` with a binary search

        let found = false;
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][0] <= target && matrix[row][matrix[row].length - 1] >= target) {
                return this.binarySearch(matrix[row],target);
            }
        }
        return found;
    }

    binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return true; // Target found
            } else if (arr[mid] < target) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }

        return false;
    }
}
