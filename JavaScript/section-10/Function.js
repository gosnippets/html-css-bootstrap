// 1
function sum(a, b) {
    return a + b;
}

// 2
const sum1 = function (a, b) {
    return a + b;
}

// 3
const str = a => a;
const sub = (a, b) => a - b;
const sub1 = (a, b) => { return a - b }


// # Default Parameters
// 1
function greet(name = "Ravi") {
    console.log(`Hello ${name}`)
}
greet(); // Hello Ravi
greet("Ram"); // Hello Ram

// 2
const multiply = function (a, b = 1) {
    console.log("Multiply", a * b)
}

multiply() // NaN
multiply(5) // 5

// 3
const printPersonFullname = (obj = { firstName: "Ravi", lastName: "Raushan" }) => {
    console.log(obj.firstName, obj.lastName)
}
printPersonFullname();
printPersonFullname({ firstName: 'Surya', lastName: 'Teja' });

// 4
const items = ['Apple', 'Banana', 'Orange'];

function printItems(items = []) {
    console.log(items)
}

printItems()
printItems(items)

// 5
function isAdmin(name = "Ravi", isAdmin = false) {
    console.log(isAdmin)
    console.log(name, isAdmin ? 'Admin' : 'User')
}
isAdmin()
isAdmin("Surya", true)

// Passing by value
function count(a) {
    a++;
    return a;
}

let num = 5;
console.log(count(num)); // 6
console.log(num); // 5

// Passing by reference
function changeName(person) {
    person.name = "Surya"
}

let user = { name: 'Ravi', age: 28 }
console.log(user) // 'Ravi
changeName(user);
console.log(user) // 'Surya