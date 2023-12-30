// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

function findMin(nums) {
    let l = 0, r = nums.length-1
    if(nums[l] <= nums[r]) return nums[l];

    while(l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if(nums[mid] > nums[mid+1]) return nums[mid+1];

        if(nums[mid] < nums[l]) {
            r = mid;
        }else {
            l = mid;
        }

    }
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([1]))
console.log(findMin([2,4,5,6,7,0,1]))
console.log(findMin([0,1,2]))
console.log(findMin([5,6,7,0,1,2,4]))
console.log(findMin([7,0,1,2,4,5,6]))




