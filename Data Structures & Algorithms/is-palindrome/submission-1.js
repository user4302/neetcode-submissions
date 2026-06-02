class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // remove white spaces
        // reverse the direction
        // convert to lowercase
        // remove non alphanumeric characters
        const reversed = s.replace(/\s+/g, '').split('').reverse().join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
        const original = s.replace(/\s+/g, '').toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
        return reversed === original
    }
}
