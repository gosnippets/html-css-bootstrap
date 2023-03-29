// OOP 

// 1. Cunstructor function and the new operator

// const Person = function (firstName, age) {
//     // Instance properties
//     this.firstName = firstName
//     this.age = age
// }

// // function Person(firstName, age) {
// //     // Instance properties
// //     this.firstName = firstName
// //     this.age = age
// // }

// const Student = function (firstName, age) {
//     // Instance properties
//     this.firstName = firstName
//     this.age = age
// }

// const person1 = new Person("Surya", 32)
// const person2 = new Student("Ravi", 32)
// console.log(person1)

// console.log(person2 instanceof Person)

// Person.greeting = function () {
//     console.log("Hello Ravi!")
//     console.log(this)
// }

// console.log(Person.greeting())
// console.log(Person.prototype)

// Person.prototype.getAllDetails = function () {
//     console.log(this.firstName, this.lastName, this.age, this.marks)
// }

// Person.prototype.lastName = "Teja"
// Person.prototype.marks = [70, 50, 90, 44, 99]
// console.log(Person.prototype)
// person1.getAllDetails()

// // # hasOwnProperty
// console.log(person1.hasOwnProperty("firstName"))
// console.log(person1.hasOwnProperty("lasName"))
// console.log(person1.hasOwnProperty("age"))

// // # isPrototypeOf
// console.log(Person.prototype.isPrototypeOf(person1)) // true
// console.log(Student.prototype.isPrototypeOf(person2)) // true

// console.log(Person.prototype.isPrototypeOf(person2)) // false
// console.log(Student.prototype.isPrototypeOf(person1)) // false


// // Class 

// // const PersonCls = class {}
// // class PersonCls {}

// class PersonCl {
//     constructor(firstName, age) {
//         this.firstName = firstName
//         this.age = age
//     }

//     greeting() {
//         console.log("Hello", this.firstName, "Age", this.age)
//     }

//     get firstName() {
//         return this._firstName
//     }

//     get age() {
//         return this._age
//     }

//     set firstName(firstName) {
//         this._firstName = firstName
//     }

//     set age(age) {
//         this._age = age
//     }
// }

// const person3 = new PersonCl("Surya", 32)
// console.log(person3)
// console.log(person3.firstName, person3.age)

// // PersonCl.prototype.greeting = function () {
// //     console.log("Hello Surya!")
// //     console.log(this)
// // }
// // person3.greeting()

// // or

// person3.greeting()
// console.log(person3.firstName)

// // Getter and Setter 
// // setting the new Value 
// person3.firstName = "Ravi"
// person3.age = 35

// // getting the new value 
// console.log(person3.firstName, person3.age)

// person3.firstName = "Rakesh"
// person3.age = 40

// console.log(person3.firstName, person3.age)
// person3.greeting()
// // console.log(person3.firstName)

// // Setters and Getters 
// const student = {
//     name: "Ravi Teja",
//     branch: "CSE",

//     get latestDetials() {
//         return { "name": this.name, "branch": this.branch }
//     },

//     /**
//      * @param {string} name
//      */
//     set setStudentName(name) {
//         this.name = name
//     },

//     /**
//      * @param {string} branch
//      */
//     set setStudentBranch(branch) {
//         this.branch = branch
//     }
// }

// console.log(student.latestDetials)
// student.setStudentName = "Ravi Raushan"
// student.setStudentBranch = "ME"

// console.log(student.latestDetials)

// // Object.create

// const PersonProto = {
//     calcAge(){
//         console.log(this.firstName)
//         console.log(2023- this.birthYear)
//     },
//     init(firstName, birthYear){
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }
// }

// const person4 = Object.create(PersonProto)
// console.log(person4) // {}

// person4.firstName = "Ravi";
// person4.birthYear = 1990

// console.log(person4)
// person4.calcAge()

// const person5 = Object.create(PersonProto)
// console.log(person5) // {}
// person5.init("Surya", 1994)

// person5.calcAge()


// Inheritance in function
// const Person = function (firtsName, birthYear) {
//     this.firtsName = firtsName
//     this.birthYear = birthYear
// }

// Person.prototype.getPersonDetials = function(){
//     console.log("Name",this.firtsName, "birthYear", this.birthYear)
// }

// const Student = function (firtsName, birthYear, branch) {
//     Person.call(this, firtsName, birthYear)
//     // this.firtsName = firtsName
//     // this.birthYear = birthYear
//     this.branch = branch
// }

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.indroduce = function(){
//     console.log(`My name is ${this.firtsName} and my branch is ${this.branch}.`)
// }

// const student = new Student("Surya", 1995, "CSE")
// student.indroduce()
// student.getPersonDetials()

// Inheritance in class 
// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear
//         console.log("FirstName", firstName, birthYear)
//     }

//     calcAge() {
//         console.log("Age", 2023 - this.birthYear)
//     }

// get firstName() {
//     return this._firstName
// }

// get birthYear() {
//     return this._birthYear
// }

// set firstName(firstName) {
//     this._firstName = firstName
// }

// set birthYear(birthYear) {
//     this._birthYear = birthYear
// }
// }

// class StudentCl extends PersonCl {
//     constructor(firstName, birthYear, branch) {
//         super(firstName, birthYear)
//         this.branch = branch
//     }

//     introduce() {
//         console.log(this)
//         console.log(`My name is ${this.firstName} and my branch is ${this.branch}.`)
//     }

//     calcAge(){
//         console.log(`I'm ${2023- this.birthYear} years old`)
//     }
// }
// const student = new StudentCl("Ravi", 1995, "CSE");
// student.introduce()
// student.calcAge()


// 1. Public fields
// 2. Private fields
// 3. Public Methods
// 4. Private Methods

// static methods

class Account {
    // Public fields
    timestamp = new Date();

    // Private fields
    #amount = 1000;
    #pin;

    constructor(name, pin) {
        this.name = name;
        this.#pin = pin
        console.log("Name", this.name, "Pin", this.#pin)
    }

    // Public methods
    getAmount() {
        return this.#amount;
    }

    deposit(amount) {
        this.#amount = this.#amount + amount
        console.log(`Rs. ${amount} added successfully`)
        return this;
    }

    withdraw(amount) {
        this.#amount = this.#amount - amount
        console.log(`Rs. ${amount} withdrawl successfully`)
        return this
    }

    requestLoan(amount) {
        console.log(amount, this._approveLoan(amount))
        if(this._approveLoan(amount)){
            this.deposit(amount);
            console.log("Loan amount is approved...")
        }else {
            console.log("Loan amount is not approved..")
        }
    }

    // Private methods
    _approveLoan(amount) {
        if (amount <= (this.#amount * 3)) return true
        return false
    }

    // Static Methods
    static getDate(){
        console.log("Date", new Date())
    }
}

const person = new Account("Surya", 1234)
console.log(person.getAmount())
console.log(person.getAmount())
person.withdraw(1500)
console.log(person.getAmount())
person.requestLoan(30000)

Account.getDate()

console.log(person.timestamp) // public field
console.log(person.amount)

console.log(person.getAmount())

// Chaining Example
person.deposit(2000).withdraw(1500).deposit(10000);
