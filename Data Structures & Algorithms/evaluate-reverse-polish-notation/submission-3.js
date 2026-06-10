class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // define a stack to hold numbers
        let stack = [];
        // define a map for carrying out operations
        const operation = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b), // Math.trunc handles LeetCode's "truncate toward zero" rule
        };
        // loop through tokens
        for (let i = 0; i < tokens.length; i++) {
            // if number
            if (tokens[i] !== "+" && tokens[i] !== "-" && tokens[i] !== "*" && tokens[i] !== "/") {
                stack.push(Number(tokens[i])); // Convert the string "2" to actual number 2
            } else {
                // else
                // run operator on top 2 stack items
                let num1 = stack.pop();
                let num2 = stack.pop();
                let result = operation[tokens[i]](num2, num1);

                // add result to stack
                stack.push(result);
            }
        }
        // retun final value that exists in stack
        return stack[0];
    }
}
// errors

// i tried to simply add the operation bertqween 2 numnbers..
// const operation = {

// if(typeof tokens[i] === 'number' && !Number.isNaN(tokens[i])){
// if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
