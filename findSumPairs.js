// Find all pairs in an array of integers whose sum is equal to a given number

let arr = [1, 5, 6, 1, 0, 1, 3, 2, 3]

const findSumPairs = (number, arr) => {
  let pairs = []
  let hashMap = {}

  arr.forEach(num_i => {
    arr.forEach(num_j => {
      if (
        number == num_i + num_j &&
        !hashMap[num_i.toString() + num_j.toString()]
      ) {
        pairs.push([num_i, num_j])
        hashMap[num_i.toString() + num_j.toString()] = num_j
      }
    })
  })
  return pairs
}

console.log(findSumPairs(6, arr))
