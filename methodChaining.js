// Method chaining

const obj = {
  a() {
    console.log('Called A')
    return this
  },
  b() {
    console.log('Called B')
    return this
  }
}

obj.a().b()