// Function to unscramble given text with provided array

let trueWords = ['love', 'rike', 'erik', 'foo']

// unscramble("ovle") → ["love"]
// unscramble("reik") → ["erik", "rike"]
// unscramble("of") → []
// unscramble("ffo") → []

const unscramble = text => {
  let result = []
  trueWords.forEach(word => {
    if (word.length == text.length) {
      let wordCopy = word
      text.split('').forEach(char => {
        wordCopy = wordCopy.replace(char, '')
      })
      if (wordCopy == '') result.push(word)
    }
  })
  return result
}

console.log(unscramble('reik'))
