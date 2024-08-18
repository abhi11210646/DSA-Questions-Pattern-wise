
function nge(arr) {
    const result = {};
    const stack = []
    for (let i = arr.length - 1; i >= 0; i--) {
        let ele = arr[i];
        while (stack.length && stack[stack.length - 1] < ele) {
            stack.pop();
        }
        if (!stack.length) {
            result[arr[i]] = -1;
        } else {
            result[arr[i]] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    return result;
}

const nums = [6, 2, 4, 5, 3, 7]
console.log(nge(nums))