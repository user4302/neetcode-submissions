class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // find max value in piles, largestPile
        // this will be the max value that we can use to get 1 hour per pile
        // we then use a sorted list of numbers from 1 to largestPile,
        // (not a real array, as this can cause issues if the size is too big for ram)
        // 3 pointers will work here
        let smallestPile = 1; // smallest possible value
        let largestPile = Math.max(...piles); // largest possible val via max in int[]
        let middlePile = largestPile; // value that will be returned at the end

        // while the smallestPile is not greater or equal to the largestPile
        while (smallestPile < largestPile) {
            // we start from the middle value in this list
            middlePile = Math.floor((smallestPile + largestPile) / 2);

            let feedingSessionHours = 0;
            for (let pile of piles) {
                // calculating hours taken for a pile
                // by checking number of hours that can go into a pile
                // and then converting it to its ceiling

                // example: pile=7, middlePile=3, eat very hour= 3, 3, 3(actually 1),
                // resulting in 3 hours of waiting at this pile
                // as 3 rounds of munching were needed
                // regardless of if the pile is completed or not
                feedingSessionHours += Math.ceil(pile / middlePile);

                // Break early if iteration count is greater than h
                // because this means that piles are incomplete
                // and koko is out of time
                if (feedingSessionHours > h) {
                    break;
                }
            }

            // we discard the right end of the list if all the piles were eaten
            // before we ran out of time, h
            // and focus on the left half, and repeat this process.
            if (feedingSessionHours <= h) {
                largestPile = middlePile;
            }
            // eventually, the if condiiton will fail,
            // the piles will not be all eaten before h iterations end.
            // when this happens we use the right side of the split list
            // and discard/ ignore the left half.
            else {
                smallestPile = middlePile + 1;
            }
            // this divide and conquer process will be repeated
            // until no more values can be checked
        }

        // we then return smallestPile
        // (which is where our bounds completely meet)
        return smallestPile;
    }
}
