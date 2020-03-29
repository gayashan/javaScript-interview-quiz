// Test whether given number is palindrome

const number = 12421

const isPalindrome = number => {
  let str = number.toString()
  let reverseStr = str.split('').reverse().join('')

  if (str == reverseStr) return true
  else return false
}

console.log(isPalindrome2(number))
