class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // first we validate if t is less than or equal to s
        if (t.length > s.length) return "";

        // a simple map used to compare the available trackers with
        let requiredCharacters = {};
        // this will track the available characters in the window
        let availableCharacters = {};
        // a tracker for the count of valid character TYPES in the current window
        let validCharacterTypes = 0;
        // a tracker for the starting index of the current shortest window
        let shortestStartingIndex = 0;
        // a tracker for the length of the shortest window,
        // starting with infinity as zero implies there is no substring
        let shortestWindowLength = Infinity;
        // a leader to move in front
        // let leaderPointer = 0;
        // X will be defined in a for loop to reduce redundancy
        // and a follower to follow behind
        let followerPointer = 0;

        // first assign the unique character types and their count to requiredCharacters
        // for (let i = 0; i < s.length; i++) {
        //     requiredCharacters[s[i].toUpperCase()] += 1;
        // }
        // X the above loop will fail because the value is undefined
        // there is no value so undefined+1 = NaN
        for (const char of t) {
            // check if the value is falsey,
            // if so use zero, else use the contained value
            requiredCharacters[char] = (requiredCharacters[char] || 0) + 1;
        }

        // This will be used to facilitate the while loop that is usedto move the
        // followerPointer forward
        let uniqueCharacterTypesCount = Object.keys(requiredCharacters).length;

        // then we begin by moving the leader
        // and updating availableCharacters and validCharacterTypes each iteration
        // until availableCharacters satisfies all the requiredCharacters
        for (let leaderPointer = 0; leaderPointer < s.length; leaderPointer++) {
            // if the leader finds a value  that matches a key in requiredCharacters
            // add that to availableCharacters and +1 validCharacterTypes
            // if (requiredCharacters[(t[leaderPointer].toUpperCase())]) {
            // X the above is wrong, it will return false even if a key exists,
            // if the key's value is zero
            let currentCharacterInS = s[leaderPointer];
            if (currentCharacterInS in requiredCharacters) {
                // only if the currentCharacterInS is in requiredCharacters
                // we create a KV pair in availableCharacters
                availableCharacters[currentCharacterInS] =
                    (availableCharacters[currentCharacterInS] || 0) + 1;

                // if the currentCharacterInS value is equal to
                // the requiredCharacters value, we incremenet validCharacterTypes
                // this is to ensure that we track only 100% fulfilment
                // of the requirted character, so that duplicates and less than 100% counts
                // (like 1/2 or 3/5 characters) will not increment this counter
                if (
                    availableCharacters[currentCharacterInS] ===
                    requiredCharacters[currentCharacterInS]
                ) {
                    validCharacterTypes++;
                }
            }
            // if availableCharacters contains all of requiredCharacters
            // in terms of type AND quantity
            while (validCharacterTypes === uniqueCharacterTypesCount) {
                // we update shortestStartingIndex and shortestWindowLength
                // shortestStartingIndex = followerPointer;
                // X wrong, only save if the window is actually smaller than previous
                // we use +1 because index length is zero based
                // i2-i0 = 2, but we need i2-i0+1 = 3, because 0,1,2 is 3
                // shortestWindowLength = leaderPointer - followerPointer + 1;
                // X wrong, only save if the window is actually smaller than previous
                let currentWindowLength = leaderPointer - followerPointer + 1;
                if (currentWindowLength < shortestWindowLength) {
                    shortestWindowLength = currentWindowLength;
                    shortestStartingIndex = followerPointer;
                }
                // and then move followerPointer forward
                // followerPointer++;
                // X Wrong, If leftChar is a needed character
                // (i.e., it exists in requiredCharacters),
                // you must decrement its count from your active window
                let leftCharacter = s[followerPointer];
                if (leftCharacter in requiredCharacters) {
                    availableCharacters[leftCharacter]--;

                    // If our window no longer has ENOUGH copies of this character,
                    // we lose 1 point on our scorecard tracker.
                    if (availableCharacters[leftCharacter] < requiredCharacters[leftCharacter]) {
                        validCharacterTypes--;
                    }
                }
                // and then move followerPointer forward
                followerPointer++;
                // until availableCharacters does not meet requiredCharacters
                // if (
                //     availableCharacters[currentCharacterInS] !==
                //     requiredCharacters[currentCharacterInS]
                // )
                //     break;
                //
            }
        }
        // here if shortestWindowLength === Infinity no valid substring was found
        return shortestWindowLength === Infinity
            ? // and we return ""
              ""
            : // else we use our 2 variables to cut the substring and retuen it
              s.substring(shortestStartingIndex, shortestStartingIndex + shortestWindowLength);
    }
}
