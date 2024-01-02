// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/


var maxVowels = function (s, k) {

    let l = 0, r = 0;
    let v = 0;
    let max_v = 0;
    let vv = ['a', 'e', 'i', 'o', 'u'];

    while (r < s.length) {
        if (vv.includes(s[r])) {
            v++;
        }
        if (r - l + 1 == k) {
            if (v > max_v) max_v = v;
            if (vv.includes(s[l])) {
                v--;
            }
            l++;
        }
        r++;
    }
    return max_v;
};