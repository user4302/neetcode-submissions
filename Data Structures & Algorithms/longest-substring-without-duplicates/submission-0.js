class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Tracker for the overall maximum unique substring length discovered
        let maxLength = 0;
        
        // A set used to track which unique characters currently live inside our window
        let sequence = new Set();
        
        // Define the left pointer outside the loop so its position persists across iterations
        let left = 0;

        // A loop to drive the right pointer forward across the string one index at a time
        for (let right = 0; right < s.length; right++) {

            // A loop that triggers if the right pointer's character already exists in our set.
            // It keeps deleting the character at the left pointer and moving the left pointer right
            // until the duplicate is completely cleared out.
            // this is done to remove the current sequence and start the new sequence
            while (sequence.has(s[right])) {
                sequence.delete(s[left]);
                left++;
            }

            // Once the duplicate roadblock is cleared, safely add the new character to the set
            sequence.add(s[right]);

            // Calculate the exact size of the current window using index distance math
            let currentWindowLength = right - left + 1;
            
            // Instantly compare the current window size against our record high score
            maxLength = Math.max(maxLength, currentWindowLength);
        }
        
        // Return the final maximum length recorded
        return maxLength;
    }
}