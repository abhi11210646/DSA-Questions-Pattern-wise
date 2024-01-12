// https://leetcode.com/problems/move-zeroes/description/?

var moveZeroes = function(nums) {
    let slow = fast = 0;
    while(fast < nums.length){
        if(nums[fast] != 0) {
            let t = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = t;
            slow++;
        }
        fast++;
    }
};