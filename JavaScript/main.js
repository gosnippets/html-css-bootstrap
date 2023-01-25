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

// let obj = { name: "ram", contact: 123 };
// console.log(obj["name"]);

// function myFunction() {
//   console.log("This is function");
// }

// myFunction();

// const sum = add(30, 30, 40);
// const sum2 = add(40, 30, 40);
// const sum3 = add();
// const sum4 = add(20, 30);

// console.log("Sum = ", sum, "Sum2 = ", sum2, sum3, sum4);

// function add(a = 0, b = 0, c = 0) {
//   const d = a + b + c;
//   return d;
// }

// function oddoreven(num) {
//   const isEven = num % 2;
//   console.log("reminder",isEven)
//   if(isEven==0){
//     document.getElementById("oddoreven").innerHTML= "Even"
//   }else {
//     document.getElementById("oddoreven").innerHTML= "Odd"
//   }
// }

// oddoreven(8);

// let str = "This is text";
// let str1 = 'This is text';

// let str = "It's okay! This is text";
// let str1 = '"String" This is text';

// let str = 'It\'s \n okay! This is\\ text';
// let str1 = "\"String\" This is text";

let str = "This is text";
let str1 = "This is text.";

// console.log(str.length, str1.length);

// slice(start, end)
// substring(start, end)
// substr(start, length)

// -10 ="is is t"
let sliceValue = str.slice(-10, -3);
let startValue = str.slice(7)
let startValue1 = str.slice(-4);

// console.log(sliceValue);
let stringValue = str.substring(3,12)
// console.log(stringValue);

let strValue = str.substr(8, 4);
// console.log(strValue)

let strText = "10 Ravi My name is Ravi";
let newStr = strText.replace("10","20")
let newStr1 = strText.replaceAll("Ravi","Surya")

console.log(newStr,newStr1, strText.toUpperCase(), strText.toLowerCase())



// document.getElementById("str").innerHTML = str + " " + str1;
