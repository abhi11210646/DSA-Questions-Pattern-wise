https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    if(digits == "") return []
    
    let digit_mapping = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let solutions = []

    function combination(state, index) {
        if (state.length == digits.length) {
            solutions.push(state);
            return;
        }

        for (c of digit_mapping[digits[index]]) {
            let tmp = state;
            state = state + c;
            combination(state, index+1);
            state = tmp;
        }

        return solutions;
    }

    return combination("", 0)
};