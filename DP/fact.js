// Recursive
function fact(n) {
    if (n == 0 || n == 1) return n;
    return n * fact(n-1);
}
console.log(fact(1500));


// Iterative
let dp = [0,1];
function factIterative(n) {
    let c = 2;
    while (c <= n) {
        dp[c] = c * dp[c-1];
        c++;
    }
    return dp[n];
}
console.log(factIterative(1500))
