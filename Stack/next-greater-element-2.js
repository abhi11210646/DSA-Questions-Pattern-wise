// Note: lookup in circular 
// Hint: treat a array as a combined array [...arr1, ...arr1]
// arr = [1,2,1], change it to arr = [1,2,1, 1,2,1]

// Trick: do not create new array, simply assume that array size is doubled. 
// new N = arr.length*2
// j->0 to N-1
// i = j % arr.length;


function nge(arr) {
    const result = [];
    const stack = []
    let N = arr.length * 2;
    for (let j = N - 1; j >= 0; j--) {
        i = j % arr.length;   // 5(2), 4(1), 3(0), 2, 1, 0
        let ele = arr[i];
        while (stack.length && stack[stack.length - 1] <= ele) {
            stack.pop();
        }
        if (!stack.length) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(ele);
    }
    return result;
}

const nums = [1, 3, 2]
console.log(nge(nums))