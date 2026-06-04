class MinStack {
    constructor() {
        this.minStack = [];
        this.sortedStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val);
        this.sortedStack = [...this.minStack];
        this.sortedStack.sort((a, b) => a - b);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        this.sortedStack = [...this.minStack];
        this.sortedStack.sort((a, b) => a - b);
    }

    /**
     * @return {number}
     */
    top() {
        return this.minStack[this.minStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.sortedStack[0];
    }
}
