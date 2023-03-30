// Asynchronous Javascript


// Synchronous Example
// console.log("Hello World!")
// alert("HI")
// console.log("This is text..")

const pEl = document.querySelector("p")
pEl.style.color = "red"
console.log("Color changed")
// alert("Hello")
// pEl.textContent = "This is description text.."

// Asynchronous Example
console.log("Hello World!")
setTimeout(() => {
    console.log("Inside Timeout")
}, 5000)
console.log("This is text..")

setTimeout(() => {
    pEl.textContent = "This is description text.."
}, 5000)
console.log("This is text..")


// AJAX : Asynchronous Javascript AND XML
// Allow us to communicate with the remote servers in Asynchronous way.
// GET, POST ...etc

// API: Application Programming Interface

// AJAX call
const request = new XMLHttpRequest()
request.open("GET", "https://jsonplaceholder.typicode.com/users")
request.send()

request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText)
    console.log("Data", data)
    for(let user of data){
        console.log(user.name)
    }
})

// Callback hell

function makeRequest1(callback){
    // ... 
    callback()
}

function makeRequest2(callback){
    // ... 
    callback()
}

function makeRequest3(callback){
    // ... 
    callback()
}

function makeRequest4(callback){
    // ... 
    callback()
}

makeRequest1(function(){
    makeRequest2(function(){
        makeRequest3(function(){
            makeRequest4(function(){
    
            })
        })
    })
})

