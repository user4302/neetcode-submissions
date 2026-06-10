class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];

        // Define a recursive helper function (backtrack)
        function backtrack(currentString, openCount, closeCount) {
            // if the currentString length is the same as 2 x n
            // which is 2 pairs of n
            // a fully built string
            if (currentString.length === n * 2) {
                result.push(currentString);
                return; // Stop diving, collapse this timeline branch
            }

            // if the currently open parenthesis is less than n
            // we can add more opening parenthesis, so:
            // recurse into backtrack with
                // currentString added with "("
                // openCount + 1 (because we add another "(")
                // closeCount
            if (openCount < n) {
                backtrack(currentString + "(", openCount + 1, closeCount);
            }

            // if the number of closed parenthesis is
            // less than the number of open parenthersis
            // we can add more closing parenthesis, so:
            // recurse into backtrack with
                // currentString added with ")"
                // openCount
                // closeCount + 1 (because we add another ")")
            if (closeCount < openCount) {
                backtrack(currentString + ")", openCount, closeCount + 1);
            }
        }

        // stat the recursion starting with an empty string and 0 counts
        backtrack("", 0, 0);

        return result;
    }
}
