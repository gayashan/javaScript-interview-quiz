// Return an array showing the cumulative sum at each index of an array of integers

const arr = [1, 3, 5, 7]

// Time complexcity O(n2)
const cumulativeSumOn2 = arr => {
  let cumuSum = []
  for (let a = 0; a < arr.length; a++) {
    let tempSum = 0
    for (let b = 0; b < a + 1; b++) {
      tempSum = tempSum + arr[b]
    }
    cumuSum.push(tempSum)
  }
  return cumuSum
}

// Time complexcity O(n) - OPTIMAL WAY 
const cumulativeSumOn = arr => {
  let cumuSum = [arr[0]]
  for (let a = 1; a < arr.length; a++) {
    cumuSum.push( arr[a] + cumuSum[a-1])
  }
  return cumuSum
}

console.log('Time Complexcity 0(n2) :', cumulativeSumOn2(arr))

console.log('Time Complexcity 0(n) :', cumulativeSumOn(arr))
