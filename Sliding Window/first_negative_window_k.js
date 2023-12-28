// Input : arr[] = {-8, 2, 3, -6, 10}, k = 2
// Output : -8 0 -6 -6


function solution(arr, k) {
    let left = right = 0;
    const result = [];
    let negatives = [];
    while (right < arr.length) {
        const currWindow = right - left + 1;
        if (arr[right] < 0) {
            negatives.push(arr[right]);
        }
        if (currWindow == k) {
            result.push(negatives[0] || 0);
            // logic of sliding window(work on left element)
            if (arr[left] < 0) {
                // negatives.shift(); // O(N) worst case
                // swap element at last and delete
                let first = negatives[0];
                negatives[0] = negatives[negatives.length - 1];
                negatives[negatives.length - 1] = first;
                negatives.pop(); // O(1)
            }
            left++;

        }
        right++;

    }
    return result;
}

let arr = [-8, 2, 3, -6, 10];
let k = 2;
console.log(solution(arr, k));


arr = [12, -1, -7, 8, -15, 30, 16, 28];
k = 3;
console.log(solution(arr, k));

