var num = '50';
console.log(typeof num)
console.log(typeof Number(num))

console.log(num == 50);
console.log(num === 50)
console.log(Number(num) === 50)
console.log(2 === Number('2'))

console.log(20 === 20.000) // output: true
console.log(20 === 20.1) // output: false

var id = 1234 + '-NH'
console.log(id)
var total = 10 + 5 + num + 5// Output: 15505
var total2 = num + 10 // Output: 5010
console.log(total)
console.log(total2)

console.log(100 + 30 + '20' + 50 + 30) // Output: 130205030
console.log(+'30') //output:  30
console.log(typeof +'30')

console.log(Number.parseInt('#100abc30')) // Output: 100

// isNaN
console.log(Number.isNaN(Number.parseInt('#100abc30')))
console.log(Number.isNaN(40))

// isFinite
console.log(Number.isFinite(10))
console.log(Number.isFinite(10 / 0))

// isInteger
console.log(Number.isInteger(40))
console.log(Number.isInteger(40.5))


// 1000-9999 // generate random 4 digit number
// 0-0.99 Math.random()
console.log(Math.floor(Math.random() * 10000) + 1)

// Math.round()
console.log(Math.round(10.6))
console.log(Math.round(10.5))
console.log(Math.round(10.4))

// Math.floor()
console.log(Math.floor(10.6))
console.log(Math.floor(10.5))
console.log(Math.floor(10.4))

// Math.ceil
console.log(Math.ceil(10.6))
console.log(Math.ceil(10.5))
console.log(Math.ceil(10.4))
console.log(Math.ceil(10.0))

// Math.trunc
console.log(Math.trunc(10.6456))
console.log(Math.trunc(10.5))
console.log(Math.trunc(10.4))
console.log(Math.trunc(10.0))

// toFixed(2)
console.log((100 / 3).toFixed(0))
console.log((100 / 3).toFixed(1))
console.log((100 / 3).toFixed(2))

// Remainder Operator (%)
console.log(100 / 3)
console.log(100 % 3)
console.log(3 % 2) // 1
console.log(14 % 5) // 4

const isOddNumber = n => n % 2 === 1
console.log(isOddNumber(3))
console.log(isOddNumber(4))
console.log(isOddNumber(5))

// Numeric Separator
const abc = 20_40_50_70
console.log(typeof abc);

console.log(typeof Number(abc))
console.log(typeof parseInt(abc))

