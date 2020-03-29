// Freeze and Seal object

const obj = {
  name : 'test',
}

// Object.freeze(obj)
// obj.mail = 'test@gmail.com'

Object.seal(obj)
obj.name = 'modified test'
obj.mail = 'test@gmail.com'

console.log(obj)