// concat arrays

var arr1 = ["Cecilie", "Lone"]
var arr2 = ["Emil", "Tobias", "Linus"]
var arr3 = ["Emil", "Tobias", "Linus"]

console.log( [...arr1, ...arr2, ...arr3] )
console.log( arr1.concat(arr2).concat(arr3))