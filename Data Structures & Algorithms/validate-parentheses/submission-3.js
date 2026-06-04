class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // check if there is at least 1 possible valid pair
        if (s.length < 2) return false;

        // create a map
        const map = new Map([
            [")", "("],
            ["}", "{"],
            ["]", "["],
        ]);

        // check if the array starts with an invalid character
        if (map.has(0)) return false;

        let stack = [];

        // loop through the list in a for loop
        for (let i = 0; i < s.length; i++) {
            // stop when the items end up being a closer (},),])
            if (map.has(s[i])) {
                // then check the closer with the last indexed item
                if (stack.pop() !== map.get(s[i])) return false;
                // keep doing this until there is a mismatch
                // or there there is no more to compare
            } else {
                // add each item to the array
                stack.push(s[i]);
            }
        }
        return stack.length === 0;
    }
}
