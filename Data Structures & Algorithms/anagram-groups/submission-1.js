class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a map to store a sorted string as the key
        // and an array of matches in an array as the value
        let map = {};
        let output = [];

        if (strs.length < 0) return [[""]];
        // for loop to iterate array
        for (let i = 0; i < strs.length; i++) {
            const sortedString = strs[i].split('').sort().join('');

            // if the map has a key matching the current sorted string
            // if(map.has(sortedString)){
            // create a KV pair where the K is the sorted string
            // an its V is a push to the array of the unsorted string
            (map[sortedString] = map[sortedString] || []).push(strs[i]);

            // else {
            // map[sortedString] = map[sortedString].push(strs(i));
            // }
        }

        // sort words and add to map if missing
        // else add to value array
        // return final values within an array
        return (Object.values(map));
    }
}
