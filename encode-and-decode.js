// https://leetcode.com/problems/encode-and-decode-strings/description/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            encoded += (str.length + "#" + str);
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0; // terminate loop
        while (i < str.length) {
            let n = str[i++];
            while (str[i] != '#') {
                n += str[i];
                i++;
            }
            i++; // skip (#)
            let digit = parseInt(n, 10);
            let word = "";
            while (digit) {
                word += str[i];
                digit--;
                i++;
            }
            decoded.push(word);
        }
        return decoded;
    }
}


let s = new Solution();
let en = s.encode(["we", "say", ":", "yes"]);
let de = s.decode(en);

console.log("=>", en, de);

en = s.encode(["we", "say", "loveyou"]);
de = s.decode(en);

console.log(en, de);