// https://www.youtube.com/watch?v=KtpqeN0Goro&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=3
// Q: Maximum Sum Subarray of size K


function solution(arr, k) {
    let left = right = 0;
    let sum = maxSum = 0;
    while (right < arr.length) {
        sum += arr[right];
        if (right - left + 1 == k) {
            maxSum = Math.max(sum, maxSum);
            sum -= arr[left];
            left++; 
        }
        right++;
    }
    return maxSum;
}


let arr = [100, 200, 300, 400]
let k = 2;
console.log("TEST#1", solution(arr, k) == 700 ? "Pass" : "Fail");

arr = [100, 300, 200, 400]
console.log("TEST#2", solution(arr, k) == 600 ? "Pass" : "Fail");

k = 1;
console.log("TEST#3", solution(arr, k) == 400 ? "Pass" : "Fail");



