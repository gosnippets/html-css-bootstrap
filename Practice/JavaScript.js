// 1. Using the map() method to double each number in an array:
// 2. Using object destructuring to extract properties from an object:
// 3. Using the spread operator to concatenate two arrays:
// 4. Using the find() method to find the first even number in an array:
// 5. Using the filter() method to filter out negative numbers from an array:
// 6. Using the reduce() method to calculate the sum of all numbers in an array:
// 7. Using the Promise.all() method to make parallel API requests:
// 8. Using async/await to make a sequential API request:
// 9. Using async/await with try/catch to handle errors:

[2,3,5] =[4,6,10]

[3,4,5,6] = 4

api1
api2
api3

console.log(api1, api2, api3)

try {

}catch(error){
    console.log("Error", error)
}
// Async and Await 

console.log("Hello Ravi!!");
alert("Hello Surya");
console.log("Hey!!")

console.log("Hello Ravi!!");
setTimeout(() => console.log("Hello Surya"), 3000);
console.log("Hey!!")

async function greeting(name) {
    const data = await getAllData();
    console.log(data);
}

async function getResponse() {
    const response = await Promise.all([
        Promise.resolve("Success1"),
        Promise.resolve("Success2"),
        Promise.resolve("Success3"),
    ])
    console.log(response)
}

console.log("response", getResponse())


