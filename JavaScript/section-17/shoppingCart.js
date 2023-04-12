console.log("Exporting Module....")

// export const greet = "Hello Ravi"
// export const greet1 = "Hello Ravi1"
// export const greet2 = "Hello Ravi2"
// export const greet3 = "Hello Ravi3"


const greet = "Hello Ravi"
const greet1 = "Hello Ravi1"
const greet2 = "Hello Ravi2"
const greet3 = "Hello Ravi3"


export { greet, greet1, greet2, greet3 }


export function add(a, b) {
    console.log("Sum=", a + b)
}