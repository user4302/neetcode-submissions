class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // if the array length is less than 2, return zero
        if (prices.length < 2) return 0;

        // lowestBuy will be prices[0]
        let lowestBuy = prices[0];

        // maxProfit will be 0
        let maxProfit = 0;

        // start a for loop
        for (let i = 0; i < prices.length; i++) {
            // if prices[i] is less than lowestBuy, overwrite lowestBuy
            lowestBuy = prices[i] < lowestBuy ? prices[i] : lowestBuy;

            // calc result of -lowestBuy +prices[i]
            // if the result is negative, its BAD, so +i and retry
            // if the result is larger than maxProfit, overwrite maxProfit
            maxProfit = prices[i] - lowestBuy > maxProfit ? prices[i] - lowestBuy : maxProfit;
        }
        // repeat until the array reaches the last index
        return maxProfit
        // at the end of the loop, return maxProfit
    }
}
