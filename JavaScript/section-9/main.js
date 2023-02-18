// const obj = {
//     numbers: [[1, 2, 3, 4], [5, 6, 7, 8]],
//     user: { id: 1, username: "Ravi", contact: "834747384" }
// }

// const arry = [1, 2, 3];
// // const a =arry[0]
// // const b =arry[1]
// // const c =arry[2]
// // console.log(a,b,c)

// // Destructuring Arrays
// const [a, b, c] = arry
// console.log(a, b, c)

// // Destructuring Objects
// const [number1, number2] = obj.numbers
// console.log(number1, number2)

// // Spread Operator
// const arry1 = [1, 2, 3, 4, 5]
// console.log(...arry1)
// const newarray = [0, ...arry1, 6]
// console.log(newarray)

// const str = "This is text";
// console.log(...str)

// // Rest Pattern and Parameters
// const arry2 = [1, 2, 3, 4, 5]
// const [x, y, ...others] = arry2
// console.log(x, y, others)

// const arry3 = ["Ram", "Shyam", "Surya", "Ravi", "Surya", "Ravi", "Surya", "Ravi"];
// const [name1, name2, , , ...otherNames] = arry3

// console.log(name1, name2);
// console.log(otherNames);

// const abc = ['a', 'b', 'c']
// const num = [1, 2, 3]

// const newarry = [...abc, ...num]
// console.log(newarry)

// const abc1 = { a: 'a', b: 'b', c: 'c' }
// const num1 = { d: 1, e: 2, f: 3 }

// const newObj = {...abc1, ...num1}

// console.log(newObj,{...abc1})

function add(...num) {
    let sum = 0;
    for (let a of num) {
        sum += a;
    }
    console.log("Total sum:", sum)
}

add(2, 3, 4, 5, 3487, 6465)

// Short Circuiting
// || = It is checing "undefined" and boolean
// let a, d = 20, c = true, b = undefined;
// console.log(a || b || c || d)

// let aname;
// const abcName = aname || "Ram"
// console.log(abcName)

// // &&
// let e = 12, f = undefined;
// console.log(e && f)

// console.log(0 || 1) // 1
// console.log(1 || 0) // 1
// console.log(0 && 1) // 0
// console.log(1 && 0) // 0
// console.log(false || true) // true
// console.log(true || false) // true
// console.log(false && true) // false
// console.log(true && false) // false


// ?? (Null and Undefined)
let abc = null;
console.log(abc ?? 10)

const rest1 = {
    name: "abc",
    numGuest: 0
}
const rest2 = {
    name: "rest2Name",
    owner: "Ravi"
}
console.log(rest1.numGuest ?? 10)
console.log(rest2.numGuest ?? 10)

let count=1;
count+=1; //count= count + 1

// rest1.numGuest ??= 10 // rest1.numGuest = rest1.numGuest ?? 10
// rest2.numGuest ??= 10 // rest2.numGuest = rest2.numGuest ?? 10

// rest1.numGuest ||= 10 // rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest ||= 10 // rest2.numGuest = rest2.numGuest || 10

rest1.numGuest &&= 10 // rest1.numGuest = rest1.numGuest && 10
rest2.numGuest &&= 10 // rest2.numGuest = rest2.numGuest && 10

console.log(rest1)
console.log(rest2)

