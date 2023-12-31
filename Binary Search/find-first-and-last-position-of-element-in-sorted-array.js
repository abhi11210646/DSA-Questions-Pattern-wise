// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


//Approach 1:: O(N) : Traverse through array 
//Approach 2:: O(logN): Binary search to find first Occurrence + Binary search to find last Occurrence

function searchRange(nums, target) {

    getFirstPosition = (nums, target) => {
        let low = 0, high = nums.length - 1;
        let start = -1;
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (nums[mid] == target) {
                start = mid;
                high = mid - 1;
            } else if (target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return start;
    }
    getLastPosition = (nums, target) => {
        let low = 0, high = nums.length - 1;
        let last = -1;
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (nums[mid] == target) {
                last = mid;
                low = mid + 1;
            } else if (target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return last;
    }
    return [getFirstPosition(nums, target), getLastPosition(nums, target)];
};


console.log(searchRange([1, 2, 4, 8, 8, 8, 8, 9], 8))