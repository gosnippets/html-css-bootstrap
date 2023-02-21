// This Keyword: This Keyword refers to an Object 

const logger = console.log;
logger(this===window)

// Object 
const person = {
    firstName: "Ravi",
    lastName: "Raushan",
    getFullName(){
        logger(`My name is ${this.firstName} ${this.lastName}`)
    }
}
person.getFullName();

// Call method
function sayHello(){
    logger(`Hello ${this.firstName}`)
}

sayHello.call(person)
sayHello.apply({firstName: "Surya"});
const hello = sayHello.bind(person);
hello();


// 'use strict';
// console.log(this=== undefined) // true
// console.log(this); // undefined

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", function(){
    logger(this===buttonEl)
}) 

const hEl = document.querySelector("h2")
hEl.addEventListener("click", function(){
    logger(this)
}) 