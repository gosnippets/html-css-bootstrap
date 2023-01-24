// let a = 20;
// let b = 20;

// console.log(a > b);

// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("b is greater than a");
// }

// if (a === b) {
//   console.log("a is equal to b");
// } else if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("b is greater than a");
// }

let obj = { name: "ram", contact: 123 };
console.log(obj["name"]);

function myFunction() {
  console.log("This is function");
}

myFunction();

const sum = add(30, 30, 40);
const sum2 = add(40, 30, 40);
const sum3 = add();
const sum4 = add(20,30);

console.log("Sum = ", sum, "Sum2 = ", sum2, sum3, sum4)

function add(a=0, b=0, c=0) {
  const d = a + b + c;
  return d;
}



