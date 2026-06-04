class MinStack {
    constructor() {
        this.minStack = [];
        this.minHistory = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val);

        if (this.minHistory.length === 0 || val <= this.getMin()) {
            this.minHistory.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let popped = this.minStack.pop();

        if (popped === this.getMin()) {
            this.minHistory.pop();
        }
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
        return this.minHistory[this.minHistory.length - 1];
    }
}
