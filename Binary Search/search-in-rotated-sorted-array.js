// https://leetcode.com/problems/search-in-rotated-sorted-array/description/


// [4, 5, 6, 7, 0, 1, 2]  => case 1 mid > l  (left part is in increasing )
// [6, 7, 0, 1, 2, 4, 5]  => case 2 mid < r  (right part is in increasing )

function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (nums[m] == target) return m; // found
        if (nums[m] >= nums[l]) { // case 1
            if (target <= nums[m] && target >= nums[l]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else  { // case 2
            if (target >= nums[m] && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))

console.log(search([4, 5, 6, 7, 0, 1, 2], 5))

console.log(search([4, 5, 6, 7, 0, 1, 2], 12))

console.log(search([4, 5, 6, 7, 0, 1, 2], 2))