// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description

var longestSubarray = function(nums) {

    let l=0, r=0;
    let max_1 = 0;
    let zero =0;
    while(r < nums.length) {
        if(nums[r] == 0) zero++;

        if(zero <=1 && r-l+1 > max_1) {
            max_1 = r-l+1;
        }
        while(zero>1) { // shrink window
            if(nums[l] == 0) zero--;
            l++
        }
        r++; // expand window
    }

    return max_1-1; // -1 because 0 will not be counted
    
};