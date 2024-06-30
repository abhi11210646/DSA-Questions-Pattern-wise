// https://leetcode.com/problems/sort-colors/description/

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
// Two pointer, O(N), O(1)
function sort1(nums) {
    let l = 0, m = 0, r = nums.length - 1;
    while (m <= r) {
        if (nums[m] == 0) {
            // swap with l
            swap(nums, m, l);
            m++, l++;
        } else if (nums[m] == 2) {
            // swap with r
            swap(nums, m, r);
            r--;
        } else {
            // unknown
            m++;
        }
    }
}
nums = [2, 0, 2, 1, 1, 0];
sort1(nums);
console.log(nums);

// Counting sort, O(N), O(1)
function sort2(nums) {
    let countArr = [0, 0, 0];
    for (let n of nums) {
        countArr[n]++;
    }

    // let c = 0;
    // for (let i = 0; i < 3;) {
    //     nums[c++] = i;
    //     countArr[i]--;
    //     if (countArr[i] == 0) {
    //         i++;
    //     }
    // }
    let k = 0;
    for (let c = 0; c < nums.length; c++) {
        if (countArr[k] == 0) {
            k++;
        }
        nums[c] = k;
        countArr[k]--;
    }
}
nums = [2, 0, 2, 1, 1, 0];
sort2(nums);
console.log(nums);
