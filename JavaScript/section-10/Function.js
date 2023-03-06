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
// const numArray = [1, 2, 3, 4, 5];

// function checkEven(value, index) {
//     console.log("index", index)
//     return value % 2 === 0;
// }
// const evenNum = numArray.filter(checkEven);
// console.log(evenNum)

// // 3. Custom HOF
// function sayHello(index) {
//     console.log(index, "Hello World!")
// }

// function repeatFunction(func, n) {
//     for (let i = 0; i < n; i++) {
//         func(i)
//     }
// }

// repeatFunction(sayHello, 3)


// const numArray2 = [1, 2, 3, 4, 5];
// function callBackExample(numArray) {
//     let newArray = [];
//     for (let value of numArray) {
//         if (value % 2 === 0) {
//             newArray.push(value)
//         }
//     }
//     return newArray
// }
// function getEvenNumber(fn) {
//     return fn(numArray2);
// }

// const abc = getEvenNumber(callBackExample)
// console.log(abc)

// // =====
// function show(num) {
//     console.log("Result =", num)
// }

// function operation(a, b, callbackFn) {
//     let sum = a + b;
//     callbackFn(sum)
// }

// operation(10, 20, show)

// // Function Accepting Callback Functions
// function add(a, b) {
//     console.log("Add function is called...")
//     return a + b;
// }

// function sub(a, b) {
//     console.log("Sub function is called...")
//     return a - b;
// }

// function Calculate(num1, num2, operation) {
//     return operation(num1, num2)
// }

// const result = Calculate(10, 5, sub)
// console.log(result)

// # Function Returning Functions

// 1
// const greet = function(greeting){
//     console.log(greeting)
//     return function(name){
//         console.log(greeting,name)
//     }
// }
// const greetHey = greet("Hey");
// greetHey("Surya")

// // 2
// function multiplyBy(basenum) {
//     return function(num){
//         console.log(basenum * num)
//         return basenum * num;
//     }
// }

// const multiplyByTwo = multiplyBy(2)
// multiplyByTwo(1);
// multiplyByTwo(2);
// multiplyByTwo(3);
// multiplyByTwo(4);


// # Call Method
// 1
// function greet() {
//     console.log("Hello", this.name);
// }
// const person = { name: "Surya", age: 32 }
// greet.call(person);

// 2
// const person2 = {
//     name: 'Surya',
//     greet: function () {
//         console.log("Hello", this.name, this.age);
//     }
// }
// person2.greet() // 
// person2.greet.call({ name: 'Ravi', age: 32 })

// 3
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.greet = function () {
//         console.log("Hello", this.name, this.age);
//     }
// }
// const person3 = {}
// Person.call(person3, 'Surya', 30);
// person3.greet();

// // 4
// function Sum4(a, b, c) {
//     console.log("Sum =", a + b + c)
// }

// Sum4.call(null, 2, 5, 3);

// # Apply Method 
// 1
// function Sum4(a, b, c) {
//     console.log("Sum =", a + b + c)
// }

// Sum4.apply(null, [2, 5, 6]); //

// // 2
// function greet(greeting) {
//     console.log(greeting, this.name)
// }

// greet.apply({ name: 'Ravi' }, ['Hello'])

// // 3
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.greet = function () {
//         console.log("Hello", this.name, this.age);
//     }
// }
// const person3 = {}
// Person.apply(person3, ['Surya', 30]);
// person3.greet();

// //
// const obj = { firstName: 'Ravi', lastName: 'Teja' }

// function fullName(greeting) {
//     console.log(greeting, this.firstName, this.lastName)
// }

// fullName.call(obj, 'Hey')
// fullName.apply(obj, ['Hello'])

// ================================================

// const studentObj = {
//     name: 'Shyam',
//     branch: 'CSE',
//     studentDetails: function (age) {
//         console.log("Name=", this.name, "Age=", age, "Branch=", this.branch)
//     }
// }

// studentObj.studentDetails.call({ name: "Himanshu", branch: 'CSE' }, 21)
// studentObj.studentDetails.apply({ name: "Himanshu", branch: 'ME' }, [23])

// =====================
// function Student(age) {
//     console.log("Name=", this.name, "Age=", age, "Branch=", this.branch)
// }

// Student.call({ name: "Surya", branch:'CSE' }, 24)
// Student.apply({ name: "Ravi", branch:'CSE' }, [25])

// Bind Method
// 1
// const person = { firstName: "Ravi", lastName: 'Raushan' }
// function greetFunction() {
//     console.log("Hello", this.firstName, this.lastName);
// }

// const greetPerson = greetFunction.bind(person)
// greetFunction(); // undefined
// greetPerson();

// // 2
// function multiply(a, b) {
//     console.log('a=',a,'b=', b)
//     return a * b;
// }

// const double = multiply.bind(null, 2)
// console.log(double(5))
// console.log(double(10))
// // console.log(multiply(2, 5))

// // 3
// const studentObj = {
//     name: 'Shyam',
//     branch: 'CSE',
//     studentDetails: function (age) {
//         console.log("Name=", this.name, "Age=", age, "Branch=", this.branch)
//     }
// }

// const getStudentDetails = studentObj.studentDetails.bind(studentObj, 32)
// getStudentDetails()

// // 4
// const personObj = {
//     name: 'Shyam',
//     getPerson: function(greeting){
//         console.log(greeting, this.name)
//     }
// }
// const person2 = personObj.getPerson.bind(personObj,'Hi');
// person2()

// # Immediately Invoked Function Expressions (IIFE)
// function greet() {
//     console.log("Hello Ram")
// }

// // greet()

// (function () {
//     console.log("Hello Shyam")
//     greet();
// })();

// (() => { console.log("Hello World!") })();

// {
//     const isPrivate = 10;
//     var notPrivate = 20
//     let private = 30
// }

// console.log(isPrivate) // isPrivate is not defined
// console.log(notPrivate) // 20
// console.log(private) // private is not defined

// # Closures
// 1
// function count() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log("Count =", count)
//     }
// }

// const counter = count()
// counter()
// counter()
// counter()
// counter()

// // 2
// function multiply() {
//     let multiplyBy = 10
//     let count = 0;

//     return function () {
//         count++;
//         console.log("Multiply =", multiplyBy * count)
//     }
// }

// const multiple = multiply()
// multiple()
// multiple()
// multiple()

// 3
// function abc() {
//     let a = 10
//     return function () {
//         a = 20;
//         console.log(a)
//     }
// }

// const abcFn = abc()
// abcFn()

// 4
let e = 100;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e;
            }
        }
    }
}
console.log(sum(10)(20)(30)(50))

// =========================

function greet(){
    console.log("Hello World!")
}

// greet()

(function(){
    console.log("Hello World!")
})()

function counter(){
    let count = 0;
    return function(){
        console.log("Count:",count++)
    }
}

const count = counter();
count()
count()
count()
