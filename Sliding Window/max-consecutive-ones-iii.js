// https://leetcode.com/problems/max-consecutive-ones-iii/description

var longestOnes = function (nums, k) {

    let l = 0, r = 0;
    let z_c = 0;
    let max_1 = 0;

    while (r < nums.length) {

        if (nums[r] == 0) {
            z_c++;
        }

        if (z_c <= k) {
            if (r - l + 1 > max_1) {
                max_1 = r - l + 1;
            }
        }

        while (z_c > k) {
            if (nums[l] == 0) z_c--;
            l++;
        }
        r++;
    }
    return max_1
};