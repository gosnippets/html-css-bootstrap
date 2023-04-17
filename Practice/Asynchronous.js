// # Asynchronous JavaScript
// 1. Callback hell
// 2. Promises/ Consuming Promises/ Chaining Promises/ Handling Rejected Promises/ Throwing Errors Manually
// 3. Fetch API
// 4. Async/Await
// 5. Error handling with try/catch
// 6. Running Promises in Parallel
// 7. Other Promise Combinators: race, allSettled and any

// Using Async/Await make a GET, POST, PUT and DELETE request using fetch API

// .then(function (response) {
//     console.log(response)
//     if (!response.ok)
//         throw new Error("Error in calling all users API....")

//     return response.json()
// })
// .catch(function (error) {
//     console.error(error)
// })
// .finally(function () {
//     console.log("Finally block calling...")
// })

async function getMethod(id) {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + id, { method: "GET" })
        .then(function (response) {
            return response.json()
        })
    console.log(data)
}

getMethod(2)


async function postMethod() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/",
        { method: "POST", data: { username: "abc", age: 23 } })
        .then(function (response) {
            return response.json()
        })
    console.log(data)
}

postMethod()

async function putMethod() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/" + 1,
            { method: "PUT", data: { username: "abc", age: 23 } })
            .then(function (response) {
                return response.json()
            })
        console.log(data)
    } catch (error) {
        console.log("Error")
    }

}

putMethod()


async function deleteMethod(id) {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + id, { method: "DELETE" })
        .then(function (response) {
            return response.json()
        })
    console.log(data)
}

deleteMethod(2)
