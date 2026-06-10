class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // 1. Setup Phase
        // Initialize left pointer at 0.
        let left = 0;
        // Initialize maxLength to track our best high score.
        let maxLength = 0;
        // Initialize maxCount to track the highest frequency of any single letter in the current window.
        let maxCount = 0;
        // Create an empty frequency map {} to count occurrences of characters inside our window.
        let countMap = {};

        // 2. Window Expansion Phase (Drive the Right Pointer forward)
        // Run a for loop where the 'right' pointer starts at 0 and goes to the end of the string.
        for (let right = 0; right < s.length; right++) {
            
            // A. Read the current character at the right pointer.
            // B. Add 1 to its count inside our frequency map.
            countMap[s[right]] = (countMap[s[right]] || 0) + 1;

            // C. Update our 'maxCount' if this character's frequency just broke the record inside the window.
            maxCount = Math.max(maxCount, countMap[s[right]]);

            // D. Calculate our current window size: (right - left + 1).
            let currentWindowSize = right - left + 1;

            // E. Budget Breach Check (WHILE loop)
            // Rule: The characters we must replace = (Current Window Size - maxCount).
            // IF the characters to replace exceeds our budget 'k':
            while (currentWindowSize - maxCount > k) {
                
                // i. Read the character at the 'left' pointer.
                // ii. Subtract 1 from its count in our frequency map (since it's leaving the window).
                countMap[s[left]] -= 1;

                // iii. Advance the 'left' pointer forward by 1 step.
                left++;

                // iv. Recalculate the current window size since the left boundary changed.
                currentWindowSize = right - left + 1;
            }
            // F. Score Update
            // Once the window is verified valid (within budget),
            // update 'maxLength' if this window size sets a new record.
            maxLength = Math.max(maxLength, currentWindowSize);
        }
        // 3. Final Result
        // Return the final maxLength recorded.
        return maxLength;
    }
}
// errors:

// countMap[s[right]] += 1;
// countMap[s[right]] = (countMap[s[right]] || 0) + 1;

// if (countMap[s[right]] > k) maxCount++;
// maxCount = Math.max(maxCount, countMap[s[right]]);