

function dailyTemerature(arr) {
    const result = []
    const stack = [];
    const N = arr.length;
    for (let i = N - 1; i >= 0; i--) {
        const ele = arr[i];
        while (stack.length && stack[stack.length - 1][0] < ele) {
            stack.pop();
        }
        if (stack.length) {
            result[i] = stack[stack.length - 1][1] - i;
        } else {
            result[i] = 0;
        }
        stack.push([ele, i]);
    }
    return result;
}

Input = [70, 73, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemerature(Input))