// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function searchRange(nums, target) {

    getFirstPosition = (nums, target) => {
        let low = 0, high = nums.length - 1;
        let start = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
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
            let mid = Math.floor((low + high) / 2);
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
    return [getFirstElement(nums, target), getLastElement(nums, target)];
};