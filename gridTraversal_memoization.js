//grid traversal 
//How many ways can you traverse (going down or right) a grid to the goal 
//with dimensions m x n?

const gridTraversal = (m,n) => {
    //base case starting is at end
    if (m == 1 && n ==1 ) return 1;
    //no grid left / did not get to end 
    if (m == 0 || n == 0) return 0; 
    //check how many to go down and how many to go right and add
    return gridTraversal(m-1,n) + gridTraversal(m, n-1); 
};

console.log(gridTraversal(2,3));
// this is O(2^(m+n) time)

//using memoization 
//store the subtree values 
const memoGridTraversal = (m, n, memo = {}) => {
    //store key and sep by comma to keep two distinct nums 
    const key = m + ',' + n;
    if (key in memo) return memo[key];
        //base case starting is at end
    if (m == 1 && n ==1 ) return 1;
    //no grid left / did not get to end 
    if (m == 0 || n == 0) return 0; 
    //check how many to go down and how many to go right and add
    memo[key] = memoGridTraversal(m-1,n) + memoGridTraversal(m, n-1); 
    return memo[key];
};

console.log(memoGridTraversal(2,3));
//this is O(m*n) time 
