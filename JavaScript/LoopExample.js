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

var num=1;

while (num<=10) {
    console.log(num)
    num++;    
}

console.log("Hello");


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