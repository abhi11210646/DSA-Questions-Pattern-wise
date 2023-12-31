// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

function peakIndexInMountainArray(arr) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (arr[m] > arr[m - 1] && arr[m] > arr[m + 1]) {
            return m;
        }
        if (arr[m] > arr[m - 1]) {
            l = m
        } else {
            r = m
        }
    }
    return -1;
};

console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]))