//fib problem 

const fib = (n) => {
    if (n<=2) return 1; 
    return fib(n-1) + fib(n-2);
}
console.log(fib(7));

const betterFib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1; 
    memo[n] = betterFib(n-1, memo) + betterFib(n-2, memo);
    return memo[n];
}

console.log(betterFib(50));
