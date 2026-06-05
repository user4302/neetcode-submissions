class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // we do this to pre define a length
        // and have the memeory space reserved beforehand
        // and also so that we can automatically have 0 assigned
        // to days that do not haev a tempt that is warmer
        let output = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            // only go into the while loop if the conditions are met
            // if the stack has data and
            // if currentTemp > tempOfLastIndexInStack
            // we cant pop it here to compare as this will remove it from the stack, causing logical errors
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                // then we pop it and assign it
                let poppedIndex = stack.pop();
                // its assigned so that it can be used more thsn once
                // in the output, we assign into the index that was popped
                // (AKA, the value that has a temp greater than the current temp)
                // and to that popped index we assign the current index minus the popped index
                // which would be the number of days until the temp increases
                output[poppedIndex] = i - poppedIndex;
            }
            // this is done so that we can then find a temp that is greater than the current temp
            stack.push(i);
        }
        return output;
    }
}
