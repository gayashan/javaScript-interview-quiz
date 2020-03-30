// Closure example
// Closure is function within a function which have access to outer function scope
// It makes it possible for a function to have "private" variables

const add = (() => {
  let counter = 0
  return addTo = () => {
    return counter += 1
  }
})()

console.log(add())
console.log(add())
console.log(add())
