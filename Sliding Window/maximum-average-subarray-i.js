// https://leetcode.com/problems/maximum-average-subarray-i/description/


var findMaxAverage = function (nums, k) {

    let l = 0, r = 0;
    let s = 0;
    let avg = Number.MIN_SAFE_INTEGER;
    while (r < nums.length) {
        s += nums[r];
        if (r - l + 1 == k) {
            let c_avg = s / k;
            if (c_avg > avg) avg = c_avg;
            s -= nums[l];
            l++;
        }

        r++;
    }
    return avg;
};