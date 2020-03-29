// Implement Fibonacci  Sequence

// O(n) time complexity
const fibonacciLinear = n => {
  let result = [0, 1]
  for (let a = 2; a < n+1 ; a++) {
    result.push(result[a - 1] + result[a - 2])
  }
  return result
}

// const fibonacciRecursive = n => {
//   let result = [0, 1]
//   if (n <= 1) return 1

//   result.push(fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)) 
//   return result
// }

console.log(fibonacciLinear(6))
