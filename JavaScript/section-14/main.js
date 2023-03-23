// OOP 

// 1. Cunstructor function and the new operator

const Person = function (firstName, age) {
    // Instance properties
    this.firstName = firstName
    this.age = age
}

const person1 = new Person("Surya", 32)
const person2 = new Person("Ravi", 32)
console.log(person1)

console.log(person2 instanceof Person)

Person.greeting = function () {
    console.log("Hello Ravi!")
    console.log(this)
}

console.log(Person.greeting())
console.log(Person.prototype)

Person.prototype.getAllDetails = function () {
    console.log(this.firstName, this.lastName, this.age, this.marks)
}

Person.prototype.lastName = "Teja"
Person.prototype.marks = [70, 50, 90, 44, 99]
console.log(Person.prototype)
person1.getAllDetails()

console.log(person1.hasOwnProperty("firstName"))
console.log(person1.hasOwnProperty("lasName"))
console.log(person1.hasOwnProperty("age"))

// Class 

