// https://leetcode.com/problems/longest-repeating-character-replacement/description/

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let r = 0;
        let maxCount = 0;
        let result = 0;
        let h = {};
        while (r < s.length){
            let c = s[r];
            h[c] = h[c] ? h[c] + 1 : 1;
            maxCount = Math.max(maxCount, h[c]); // main idea
            let replaceCount = r -l + 1 - maxCount;
            if (replaceCount > k) {
                let c = s[l];
                if(h[c]) {
                    h[c]--;
                }
                l++;
            }
            result = Math.max(result, r-l+1);
            r++;
        }
        console.log("Result", result);
        return result;
    }
}

let ss = new Solution();

ss.characterReplacement("ABCACDIRFGHIJKL", 1);

