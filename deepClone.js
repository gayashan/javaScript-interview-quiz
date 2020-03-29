const cloneOld = obj => {
  let finalObj = {}

  for (let index in obj) {
    finalObj['mod_' + index] = obj[index]
  }

  return finalObj
}

const clone = obj => {
  return Object.assign({}, obj)
}

const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj))
}

const obj = {
  id: '1',
  name: 'nick',
  email: 'nick@gmail.com',
  address: {
    number: '45',
    lane: 'old school road',
    postalCode: '452356',
  },
}

console.log(clone(obj))
