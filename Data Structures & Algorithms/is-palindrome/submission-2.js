class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // remove all characters except upper 
        // and lowercase letters and numbers
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "");

        for (let i = 0; i < cleaned.length; i++) {
            // check if the characters at the ends match
            if (cleaned.charAt(i).toLowerCase() !== cleaned.charAt(cleaned.length - i - 1).toLowerCase()) {
                return false;
            }
        }
        return true;
    }
}
