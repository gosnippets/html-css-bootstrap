// Map holds key-value pairs where it can be any datatype.

// Methods
// 1. new Map()
// 2. set()
// 3. get()
// 4. delete()
// 5. clear()
// 6. has() // true or false
// 7. forEach()
// 8. entries()
// 9. keys()
// 10. values()

// size  // Property of set


const fruits1 = new Map();
fruits1.set('apples', 1000)
fruits1.set('bananas', 1500)
fruits1.set('oranges', 800)

console.log(fruits1)

fruits1.set('bananas', 2500)
console.log(fruits1)

console.log(fruits1.get('apples'))
console.log(fruits1.get('bananas'))
console.log(fruits1.get('oranges'))
console.log(fruits1.get('oranges2'))

fruits1.delete("bananas")
console.log(fruits1)

fruits1.clear();
console.log(fruits1)


const fruits = new Map([
    ['apples', 1000],
    ['bananas', 1500],
    ['oranges', 800]
])
console.log(fruits)

console.log(fruits.has('apples'))
console.log(fruits.has('apples2'))


const obj = {
    fname: "Ravi",
    lname: "Raushan"
}

fruits.set(obj, "Owner")
fruits.set(100, "Apples")
console.log(fruits)

// console.log(fruits.get(obj))
// console.log(fruits.get(100))
// console.log(fruits.get('100')) // undefined because it is checking strict data type in key

// fruits.forEach(function (value, key, map) {
//     console.log(key, value, map)
// })

// console.log(fruits.keys())
// for(let key of fruits.keys()){
//     console.log(key)
// }

// console.log(fruits.values())
// for(let value of fruits.values()){
//     console.log(value)
// }

console.log(fruits.entries())
for(let keyValue of fruits.entries()){
    console.log(keyValue);
    console.log(keyValue[0], keyValue[1])
}

console.log(fruits.size)

console.log(typeof fruits) // object