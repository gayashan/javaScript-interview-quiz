// Remove all duplicates from an array of integers

const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10]

const removeAllDuplicates = arr => {
  let result = []
  let hashMap = {}

  arr.forEach(num => {
    if (!hashMap[num]) {
      hashMap[num] = num
      result.push(num)
    }
  })

  return result
}

console.log(removeAllDuplicates(arr))
