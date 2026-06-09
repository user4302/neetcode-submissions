class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // basically length into width
        // Y is each value in the input array
        // X is each index
        // i cant simply use the 2 tallest heights
        // so i need to use 2 pointers to find the most water
        // since we start from the 2 outermost ones,
        // then find the 2 heights that can store the most water
        return this.twoPointer(heights);
    }

    calculateWater(leftIndex, rightIndex, heights) {
        // current left height
        const leftY = heights[leftIndex];
        // current left index + 1
        // +1 because this acts as the x coordinate
        // and the index is 1 step behind numerically
        const leftX = leftIndex + 1;

        // current right XY properties
        const rightY = heights[rightIndex];
        const rightX = rightIndex + 1;

        // use the smallest height, not the diference of each
        return (leftY > rightY ? rightY : leftY) * (rightX - leftX);
    }

    twoPointer(heights) {
        let left = 0;
        let right = heights.length - 1;
        let largestContainer = 0;

        while (left < right) {
            // calc current volume of 2d water
            let currentWater = this.calculateWater(left, right, heights);

            // if the calc > last calc,
            // assign current to larfgest
            if (currentWater > largestContainer) {
                largestContainer = currentWater;
            }

            // move the left or right inwards based on height
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return largestContainer;
    }
}
