// Input : forxxorfxdofr  => for
// Output : 3
// Input : aabaabaa   => aaba
// Output : 4


function solution(str, chr) {
    let left = right = 0;
    const chrHash = new Map();
    let occurrence = 0;
    for (let c of chr) {
        chrHash.set(c, (chrHash.get(c) || 0) + 1);
    }
    let count = chrHash.size;
    while (right < str.length) {
        const c = str[right];
        if (chrHash.has(c)) {
            chrHash.set(c, chrHash.get(c) - 1);
            if (chrHash.get(c) == 0) count--;
        }
        const currWindow = right - left + 1;
        if (currWindow == chr.length) {// logic of sliding window(work on left element)
            if (count == 0) {
                occurrence++;
            }
            const c = str[left];
            if (chrHash.has(c)) {
                chrHash.set(c, chrHash.get(c) + 1);
                if (chrHash.get(c) == 1) count++;
            }
            left++;
        }
        right++;
    }
    return occurrence;
}


let str = "forxxorfxdofr";
let chr = "for";
console.log("TEST#1", solution(str, chr) == 3 ? "Pass" : "Fail");

str = "aabaabaa";
chr = "aaba";
console.log("TEST#2", solution(str, chr) == 4 ? "Pass" : "Fail");


str = "CBAEBABACD";
chr = "ABC";
console.log("TEST#3", solution(str, chr) == 2 ? "Pass" : "Fail");

