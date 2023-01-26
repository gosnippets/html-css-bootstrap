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

// let str = "This is text";
// let str1 = "This is text.";

// console.log(str.length, str1.length);

// slice(start, end)
// substring(start, end)
// substr(start, length)

// -10 ="is is t"
// let sliceValue = str.slice(-10, -3);
// let startValue = str.slice(7)
// let startValue1 = str.slice(-4);

// // console.log(sliceValue);
// let stringValue = str.substring(3,12)
// // console.log(stringValue);

// let strValue = str.substr(8, 4);
// // console.log(strValue)

// let strText = "10 Ravi My name is Ravi";
// let newStr = strText.replace("10","20")
// let newStr1 = strText.replaceAll("Ravi","Surya")

// console.log(newStr,newStr1, strText.toUpperCase(), strText.toLowerCase())

// document.getElementById("str").innerHTML = str + " " + str1;

// let text1 = "Hello";
// let text2 = "World";

// console.log(text1 + " " + text2);
// console.log(text1.concat(" ", text2, " ", text1));

// let strText = "        Ravi   My name is Ravi           ";

// console.log(strText.trimStart());
// console.log(strText.trimEnd());
// console.log(strText.trim());

// let text3 = "101";
// console.log(text3.padStart(text3.length + 3, "A"));
// console.log(text3.padEnd(text3.length + 3, "0"));

let text4 = "This is Text";
// console.log(text4.charAt(8));
// console.log(text4[8])

let text5 = "This is Text";
// console.log(text5.charCodeAt(2))

let text6 = "My, name |, is ? Ram, Name"
let text7 = "1,2,3 3 4,4,5"
// console.log(text6.split("?"));

// let text8 = "This is Text is";
// console.log(text8.indexOf("is"));
// console.log(text8.lastIndexOf("is"));
// console.log(text8.indexOf("is",5));
// console.log(text8.lastIndexOf("is",text8.length));

let text9 ="012345367893";
// console.log(text9.indexOf("3"));
// console.log(text9.lastIndexOf("3"));

// console.log(text9.indexOf("3",9))
// console.log(text9.lastIndexOf("3",text9.length));

let text10 = "This is ram 10, this is ram";
// console.log(text10.match("This"));
// console.log(text10.match(/This/g));
// console.log(text10.match(/This/gi));


// const str = text10.matchAll(/this/gi)
// console.log(Array.from(str));

// console.log(text10.includes("ravi"));
// console.log(text10.includes("ram",10));


console.log(text10.startsWith("ram"));
console.log(text10.endsWith("ram"));
