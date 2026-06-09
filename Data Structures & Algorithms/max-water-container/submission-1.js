class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // create 2 vars for the left and right pointers(pillars)
        // start from the far left
        let left = 0;
        // and far right
        let right = heights.length - 1;

        // tracker for the area of water
        let waterArea = 0;

        // two pointer function
        while (left < right) {

            // left and right are indices so use them to,
            // get the shortest of the 2 current pillars (y value)
            // (because the max water is decided by the shortest (due to overflow))
            // then multiply that with the right - left index (x value)
            // calculate the area with x * y
            const currentArea = Math.min(heights[left], heights[right]) * (right - left);
            
            // assign the larger value between the waterArea and the current area,
            // to the waterArea
            waterArea = Math.max(waterArea, currentArea);

            // between the current left and right pillars (pointers)
            // move 1 pillar to an inner pillar based on their heights
            // where the shorter pillar will move, leaving the taller pillar as is
            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return waterArea;
    }
}
