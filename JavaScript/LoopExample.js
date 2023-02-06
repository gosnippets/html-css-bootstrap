// setTimeout(()=>{
//     console.log("Hello");
// },10*1000)

// var num=2;
// // setTimeout(myFunc, 0);
// myFunc();
// function myFunc() {
//     var num=10
//     console.log("Hello World");
// }

// console.log(num);
// var num = 0;
// var interval = setInterval(() => {
//     console.log(num, "Hello World");
//     num++
//     if(num==5) clearInterval(interval)
// }, 1 * 1000);

// function stopInterval(){
//     console.log("stopInterval");
//     clearInterval(interval)
// }

// var ab= 4;
// if(ab==10){ console.log("Equal to")}
// else if(ab>=5){console.log("Greater than")}
// else {console.log("else")}

// for(var i=0,num=0; i<=10 && num<=30; i++,num=num+2){
//     console.log(i,num)
// }

// var numArry = [10,20,30,4,5];

// for(var i=1;i<numArry.length;i++){
//     console.log(i, numArry[i])
//     i++;
// }

// i=5;
// for(var i=0;i<10;i++){}
// console.log(i);

// console.log(text.charCodeAt(0));
// var newText = "";
// for(let i=0; i<text.length; i++){
//     if(text.charCodeAt(i)==32 || (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) || (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122)) {
//         newText = newText + text[i]
//     }
// }

// for(let i=0; i<text.length; i++){
//     if(text[i]==" " || (text[i]>="A" && text[i]<="Z") || (text[i]>="a" && text[i]<="z")) {
//         newText = newText + text[i]
//     }
// }

// console.log(newText);

// const obj = { fname: "Surya", lname: "Teja" };
//  console.log(obj.fname)

// for(let a in obj) {
//     console.log(a)
//     console.log(obj["f"])
// }

// const arry = [
//   { fname: "Surya", lname: "Teja" },
//   { fname: "Ravi", lname: "Teja" },
// ];
// const ab = ["a", "b", "c"];

// var text = "Thi2$s is Text.. Pl343ease print s54tring on@ly";

// for (let objData of text) {
//   console.log(objData);
//   for(let key in objData){
//       console.log(key, objData[key])
//   }
// }

// const arry1 = [
//   { fname: "Surya", lname: "Teja" },
//   { fname: "Ravi", lname: "Teja" }
// ];

// arry1.forEach((value,index)=> {
//     console.log(index, value)
// })

// var num = 1;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// console.log("Hello");

// var text = "Thi2$s is Text.. Pl343ease print s54tring on@ly"
// var text = " "
// A to Z or a to z
// Expected Output : This is Text Please print string only

// Without A to Z or a to z
// Expected Output : 2$  .. 343  54 @

// Find out only number from above string
// Expected Output : 234354

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// 01 02 03 04 05
// 01 02 03 04
// 01 02 03
// 01 02
// 01

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// 01
// 01 02
// 01 02 03
// 01 02 03 04
// 01 02 03 04 05

// let num = 4;
// for (var i = 1; i <= 10; i++) {
//     console.log(num * i)
// }

// for (var i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// var str = "";
// for (var i = 5; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     str = str + j + " ";
//   }
//   str = str + "\n";
// }

// console.log(str);

// var str2 = "";
// for(var i=1; i<=5; i++){
//     for(var j= 1; j<=i;j++){
//         str2 = str2 + "0"+ j + " ";
//     }
//     str2 = str2 + "\n";
// }
// console.log(str2)

// var num = 5;
// var i = 1;

// while (i <= 10) {
//   console.log(num * i);
//   i++;
// }

// while (i <= 20) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// create a function to check odd number
// create a function to check even number
// create a function to check prime number

// function checkEvenOdd(num) {
//   if (num % 2 == 1) {
//     return num + " is Odd Number";
//   }
//   return num + " is even Number";
// }

// console.log(checkEvenOdd(5));
// var i = 7;

// do {
//     console.log(i);
//     i++;
// } while (i<=5);

// function CheckPrimeNumber(num) {
//   if(num<=1) return num+" is not valid prime number";

//   for(var i=2; i<num; i++){
//     if(num%i==0) return num + " is not prime number";
//   }

//   return num + " is prime number";
// }

// console.log(CheckPrimeNumber(10))

// for(var i=1; i<=20; i++) {
//   if(i==4) break;

//   console.log(i)
// }

// const arry = [{name:"Ravi"}, {name:"Surya"}, {name:"Shyam"}]

// for(var obj of arry) {
//   if(obj.name=="Surya") break;

//   console.log(obj.name)
// }

// for(var i=1; i<=10; i++) {
//   if(i==4 || i==5 || i==7) continue;

//   console.log(i)
// }

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// var day = new Date().getDay();
// var str = "";

// switch (day) {
//   case 0:
//     str = "Sun";
//     break;

//   case 1:
//     str = "Mon";
//     break;

//   case 2:
//     str = "Tue";
//     break;

//   case 3:
//     str = "Wed";
//     break;

//   case 4:
//     str = "Thu";
//     break;

//   case 5:
//     str = "Fri";
//     break;

//   case 6:
//     str = "Sat";
//     break;

//   default:
//     str = "Sun";
// }

// console.log(str);

// case 1 > return sum of two Number
// case 2 > return subtraction of two Number

// case 3 > return Multiple of two Number
// case 4 > return division of two Number
// var a = 10,
//   b = 5;

// var key = "div";

// function sum(a, b) {
//   return a + b;
// }

// function myFunc(key, a, b) {
//   switch (key) {
//     case "sum":
//       return "Sum of a and b is " + sum(a, b);

//     case "sub":
//       let sub = a - b;
//       return "Sub of a and b is " + sub;

//     case "mult":
//       let mult = a * b;
//       return "Mult of a and b is " + mult;

//     case "div":
//       let div = a / b;
//       return "Div of a and b is " + div;

//     default:
//       return "Sum of a and b is " + sum(a, b);
//   }
// }

// console.log(myFunc("sum", 30, 20));
// console.log(myFunc("sub", 30, 20));
// console.log(myFunc("sub", 30, 20));
// console.log(myFunc("mult", 30, 20));
// console.log(myFunc("div", 30, 20));
// console.log(myFunc("abc", 30, 20));



// var totalAmount = 10000;
// withdrawal
// deposite
// transfer

// withdrawal = 5000;
// totalAmount = 5000;

// deposite = 20000;
// totalAmount = 25000;

// transfer = 15000;
// totalAmount = 10000;

// var totalAmount = 10000;

// function bankProcess(process, amount) {
//   switch (process) {
//     case "totalAmount":
//       return "Your total amount is " + totalAmount;

//     case "withdrawal":
//       totalAmount = totalAmount - amount;
//       return "Withdrawal is completed"

//     case "deposite":
//       totalAmount = totalAmount + amount;
//       return "Deposite is completed";

//     case "transfer":
//       totalAmount = totalAmount - amount;
//       return "Transfer is completed";
//   }
// }

// console.log(bankProcess("withdrawal", 1000));


//           *
//         * *
//       * * *
//     * * * *
//   * * * * *
// * * * * * *


//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * *
// * * * * * * * * * * *

// var str = "";
// for (var i = 6; i > 0; i--) {
//   for (var j = i; j > 0; j--) {
//     str = str + "  "
//   }
//   for (var k = 6; k >= i; k--) {
//     str = str + "* "
//   }
//   str = str + "\n";
// }

// console.log(str);

// Moment
// const date= new Date();
// console.log(date.toUTCString());
// console.log(date.toISOString());

// console.log(date.getTime())
// console.log(date.getFullYear())
// console.log(date.getDay())
// console.log(date.getMonth())

// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString())

// const date2= new Date("2022-09-23");
// console.log(date2);
// console.log(date2.getTime())
// console.log(date2.getFullYear())
// console.log(date2.getDay())
// console.log(date2.getMonth())


// const date3= new Date("2019");
// console.log(date3)
// if(name=="ram"){

// }
// while(name=="ram") {
//   asdfa
// }

// console.log(true || false && true)
// console.log(true && false || true)

const date2 = new Date("2022-09-23");
date2.setFullYear(2019);
date2.setDate(1);
date2.setMonth(0);

date2.setHours(1)
date2.setMinutes(22);
date2.setSeconds(50);

// console.log(date2);

// Math Properties
const pi = Math.PI;
// console.log(pi)
// console.log(Math.sqrt(16));

// console.log(Math.round(3.4));
// console.log(Math.round(3.5));
// console.log(Math.round(3.7));


// console.log(Math.round(6.5));
// console.log(Math.round(6.4));

// console.log(Math.ceil(4.3)) //5
// console.log(Math.floor(4.3)) //4

// console.log(Math.ceil(4.9)) 
// console.log(Math.ceil(4.1)) //.1 to .9
// console.log(Math.floor(4.0))
// console.log(Math.floor(5.9)) 

// console.log(Math.trunc(10.455))
// console.log(Math.trunc(13.0455))
// console.log(Math.trunc(3.9))


// 2^4
// console.log(Math.pow(2,4))
// console.log(Math.pow(10,3))

// console.log(Math.sign(23));
// console.log(Math.sign(-2));
// console.log(Math.sign(0));
// console.log(Math.sign(100));

// console.log(Math.abs(-20.25))
// console.log(Math.abs(20.25))

// console.log("Smallest number = ", Math.min(2, 10, -3, 46, 300, -200))
// console.log("Greatest number = ", Math.max(2, 10, -3, 46, 300, -200))


// function generateRandomNumber() {
//   const random = Math.random();
//   return Math.trunc(10 * (random + 1));
// }
// console.log(generateRandomNumber())
let str = "";
let totalNum = 0
let a = 0, b = 0;

function funcNum(num) {
  console.log(num);
  a = a * 10 + num;
  str = str + num;
  console.log(a);
  document.getElementById("str").innerHTML = str;
}

function sum() {
  str = str + "+";
  b = a;
  a = 0;
  document.getElementById("str").innerHTML = str;
}

function equalTo() {
  totalNum = a + b;
  console.log(totalNum);
  str = totalNum;
  document.getElementById("str").innerHTML = str;
}

// 0 to 9
// - + / * Math sign
// = show all calculation