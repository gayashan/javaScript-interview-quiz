// Check given number is prime

const isPrimeNumber = number => {
  if (number === 1) return true
  else if (number === 2) return false
  else
    for (let a = 2; a < number; a++) {
      if (number % a === 0) return false
    }
  return true
}

console.log(isPrimeNumber(138))

