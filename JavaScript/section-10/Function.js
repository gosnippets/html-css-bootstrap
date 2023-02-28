// // 1
// function sum(a, b) {
//     return a + b;
// }

// // 2
// const sum1 = function (a, b) {
//     return a + b;
// }

// // 3
// const str = a => a;
// const sub = (a, b) => a - b;
// const sub1 = (a, b) => { return a - b }


// // # Default Parameters
// // 1
// function greet(name = "Ravi") {
//     console.log(`Hello ${name}`)
// }
// greet(); // Hello Ravi
// greet("Ram"); // Hello Ram

// // 2
// const multiply = function (a, b = 1) {
//     console.log("Multiply", a * b)
// }

// multiply() // NaN
// multiply(5) // 5

// // 3
// const printPersonFullname = (obj = { firstName: "Ravi", lastName: "Raushan" }) => {
//     console.log(obj.firstName, obj.lastName)
// }
// printPersonFullname();
// printPersonFullname({ firstName: 'Surya', lastName: 'Teja' });

// // 4
// const items = ['Apple', 'Banana', 'Orange'];

// function printItems(items = []) {
//     console.log(items)
// }

// printItems()
// printItems(items)

// // 5
// function isAdmin(name = "Ravi", isAdmin = false) {
//     console.log(isAdmin)
//     console.log(name, isAdmin ? 'Admin' : 'User')
// }
// isAdmin()
// isAdmin("Surya", true)

// // Passing by value
// function count(a) {
//     a++;
//     return a;
// }

// let num = 5;
// console.log(count(num)); // 6
// console.log(num); // 5

// // Passing by reference
// function changeName(person) {
//     person.name = "Surya"
// }

// let user = { name: 'Ravi', age: 28 }
// console.log(user) // 'Ravi
// changeName(user);
// console.log(user) // 'Surya


// // First Class Function: Javascript function is First Class Function

// // 1. Assigned to Variables or properties 
// const add = function (a, b) {
//     return a + b;
// }

// // 2. Passed as arguments to other function
// function applyFunction(fn, a, b) {
//     return fn(a, b)
// }

// const sum2 = applyFunction(add, 2, 5);
// console.log(sum2);

// // 3. Returned as values from other function
// function createAdder(a) {
//     console.log(a);
//     return function (b) {
//         return a + b;
//     }
// }
// const addTwo = createAdder(2);
// const sum3 = addTwo(6)
// console.log(sum3)


// # High-Order Function

// 1. Map
// const numArray = [1,2,3,4,5];

// const double = function (value){
//   return value* 2
// }

// const doubledNum = numArray.map(double)
// console.log(doubledNum)

// 2. Filter
const numArray = [1, 2, 3, 4, 5];

function checkEven(value, index) {
    console.log("index", index)
    return value % 2 === 0;
}
const evenNum = numArray.filter(checkEven);
console.log(evenNum)

// 3. Custom HOF
function sayHello(index) {
    console.log(index, "Hello World!")
}

function repeatFunction(func, n) {
    for (let i = 0; i < n; i++) {
        func(i)
    }
}

repeatFunction(sayHello, 3)


const numArray2 = [1, 2, 3, 4, 5];
function callBackExample(numArray) {
    let newArray = [];
    for (let value of numArray) {
        if (value % 2 === 0) {
            newArray.push(value)
        }
    }
    return newArray
}
function getEvenNumber(fn) {
    return fn(numArray2);
}

const abc = getEvenNumber(callBackExample)
console.log(abc)

// Function Accepting Callback Functions
function add(a, b) {
    console.log("Add function is called...")
    return a + b;
}

function sub(a, b) {
    console.log("Sub function is called...")
    return a - b;
}

function Calculate(num1, num2, operation) {
    return operation(num1, num2)
}

const result = Calculate(10, 5, sub)
console.log(result)