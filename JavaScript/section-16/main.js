// Asynchronous Javascript


// Synchronous Example
// console.log("Hello World!")
// alert("HI")
// console.log("This is text..")

// const pEl = document.querySelector("p")
// pEl.style.color = "red"
// console.log("Color changed")
// // alert("Hello")
// // pEl.textContent = "This is description text.."

// // Asynchronous Example
// console.log("Hello World!")
// setTimeout(() => {
//     console.log("Inside Timeout")
// }, 5000)
// console.log("This is text..")

// setTimeout(() => {
//     pEl.textContent = "This is description text.."
// }, 5000)
// console.log("This is text..")


// // AJAX : Asynchronous Javascript AND XML
// // Allow us to communicate with the remote servers in Asynchronous way.
// // GET, POST ...etc

// // API: Application Programming Interface

// // AJAX call
// const request = new XMLHttpRequest()
// request.open("GET", "https://jsonplaceholder.typicode.com/users")
// request.send()

// request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText)
//     console.log("Data", data)
//     for(let user of data){
//         console.log(user.name)
//     }
// })

// // Callback hell

// function makeRequest1(callback){
//     // ... 
//     callback()
// }

// function makeRequest2(callback){
//     // ... 
//     callback()
// }

// function makeRequest3(callback){
//     // ... 
//     callback()
// }

// function makeRequest4(callback){
//     // ... 
//     callback()
// }

// makeRequest1(function(){
//     makeRequest2(function(){
//         makeRequest3(function(){
//             makeRequest4(function(){

//             })
//         })
//     })
// })

// Promisis 

// pending
// fulfilled
// rejected

const requestUser = fetch("https://jsonplaceholder.typicode.com/users")
console.log(requestUser)

// fetch("https://jsonplaceholder.typicode.com/userss")
//     .then(function (response) {
//         console.log(response)
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (response) {
//         console.log(response)
//         if (!response.ok)
//             throw new Error("Something went wrong....")

//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)

//     })

// const buttonEl = document.querySelector("button");
// const ulEl = document.querySelector("ul");

// buttonEl.addEventListener("click", function () {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(function (response) {
//             console.log(response)
//             if (!response.ok)
//                 throw new Error("Something went wrong....")

//             return response.json()
//         })
//         .then(function (data) {
//             for (let user of data) {
//                 const liEl = document.createElement("li");
//                 liEl.textContent = user.id + ". " + user.name
//                 ulEl.appendChild(liEl)
//             }

//         })
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (response) {
//         console.log(response)
//         if (!response.ok)
//             throw new Error("Error in calling all users API....")

//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//         return fetch("https://jsonplaceholder.typicode.com/users/" + data[0].id)
//     })
//     .then(function (response) {
//         console.log(response)
//         if (!response.ok)
//             throw new Error("Error in calling single user API....")

//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function (error) {
//         console.error(error)
//     })
//     .finally(function () {
//         console.log("Finally block calling...")
//     })

// ===============================================
// POST Method 

const headerData = {
    method: 'POST',
    body: {
        "name": "Ravi Raushan",
        "username": "ravi",
        "email": "ravi@gmail.com",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
}

// fetch("https://jsonplaceholder.typicode.com/users", headerData)
// .then(function (response) {
//     console.log(response)
//     if (!response.ok)
//         throw new Error("Error in calling all users API....")

//     return response.json()
// })
// .then(function (data) {
//     console.log(data);
//     alert("User added successfully...")
// })
// .catch(function (error) {
//     console.error(error)
// })
// .finally(function () {
//     console.log("Finally block calling...")
// })


// fetch("https://jsonplaceholder.typicode.com/users", {
//     method:"POST",
//     body: {
//         "name": "Ravi Raushan",
//         "username": "ravi",
//         "email": "ravi@gmail.com"
//     }
// })
// .then(function (response) {
//     console.log(response)
//     if (!response.ok)
//         throw new Error("Error in calling all users API....")

//     return response.json()
// })
// .then(function (data) {
//     console.log(data);
//     alert("User added successfully...")
// })
// .catch(function (error) {
//     console.error(error)
// })
// .finally(function () {
//     console.log("Finally block calling...")
// })

// ========================================
// Delete method 

// fetch("https://jsonplaceholder.typicode.com/users/1", { method: "DELETE" })
//     .then(function (response) {
//         console.log(response)
//         if (!response.ok)
//             throw new Error("Error in calling all users API....")

//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data);
//         alert("User Deleted successfully...")
//     })
//     .catch(function (error) {
//         console.error(error)
//     })
//     .finally(function () {
//         console.log("Finally block calling...")
//     })


// console.log("Promise start")
// setTimeout(() => console.log("0 second timer"), 0)
// Promise.resolve("Resolved promise 1").then(res => {
//     console.log(res)
// })
// Promise.resolve("Resolved promise 2").then(res => {
//     for (let i = 0; i < 10000000; i++) { }
//     console.log(res)
// })
// console.log("Promise end")

// const isNumLessThanFive = new Promise(function (resolve, reject) {
//     const randomNum = Math.floor(Math.random() * 10) + 1
//     console.log(randomNum)
//     setTimeout(() => {
//         if (randomNum <= 5) {
//             resolve("Number is less than 5")
//         } else {
//             reject(new Error("Number is greater than 5"))
//         }
//     }, 5000)
// })
// isNumLessThanFive.then(res => console.log(res))
//     .catch(err => console.log(err))


// const wait = function (second) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, second * 1000)
//     })
// }

// wait(5).then(()=>{
//     console.log("5 second passed")
//     return wait(2)
// })
// .then(()=>{
//     console.log("2 second passed")
//     return wait(4)
// })
// .then(()=>{
//     console.log("4 second passed")
//     return wait(1)
// })
// .then(()=>{
//     console.log("1 second passed")
// })

Promise.resolve("Resolved..").then(res=> console.log(res))
Promise.reject(new Error("Error message..")).catch(error=> console.error(error))