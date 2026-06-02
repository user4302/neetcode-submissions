class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return [...s].sort().join()===[...t].sort().join()
    }
}
