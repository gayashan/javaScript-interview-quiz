// Find all duplicate numbers in an array with multiple duplicates

const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10]

const findAllDuplicates = arr => {
  let duplicates = []
  let hashMap = {}

  arr.forEach(num => {
    let temp = arr.filter(num_i => num === num_i)
    if (temp.length > 1 && !hashMap[num]) {
      duplicates.push(num)
      hashMap[num] = num
    }
  })

  return duplicates
}

console.log(findAllDuplicates(arr))
