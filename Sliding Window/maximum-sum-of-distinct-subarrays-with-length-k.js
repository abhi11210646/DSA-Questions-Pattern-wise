// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/

var maximumSubarraySum = function (nums, k) {
    let l = 0, r = 0;
    let currSum = 0;
    let maxSum = 0;
    let ele = new Map();
    while (r < nums.length) {
        ele.set(nums[r], (ele.get(nums[r]) || 0) + 1);
        currSum += nums[r];
        if (r - l + 1 == k) {
            if (ele.size == k && (currSum > maxSum)) maxSum = currSum;
            currSum -= nums[l];
            ele.set(nums[l], ele.get(nums[l]) - 1);
            if (ele.get(nums[l]) == 0) {
                ele.delete(nums[l]);
            }
            l++;
        }
        r++;
    }
    return maxSum;
};