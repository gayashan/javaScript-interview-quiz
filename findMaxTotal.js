// Find total of max number

const numbers = [1, 2, 3, 4, 5, 2, 5]

const maxNumCount = numbers => {
  let max = Math.max.apply(null, numbers)
  let temp = numbers.filter(prop => prop === max)
  let final = temp.reduce((total, current) => {
    return total + current
  })
  console.log(final)
}

maxNumCount(numbers)
