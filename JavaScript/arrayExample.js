// var num1 = 1;
// var num2 = "2";
// var num3 = 3;

// var arry = [num1, num2, num3];
// console.log(arry);

// console.log("Length", arry.length)

// console.log(arry[1])

// const arry1 = [1, 2, 3, 4, 5];
// const arry2 = ['a', 'b', 'c', ...arry1];

// arry1[5] = 6;
// arry2[3] = 'd';

// const arry3 = [...arry1, ...arry2]

// console.log(arry1)
// console.log(arry2)
// console.log(arry3)

// const arry4 = new Array('a',2,3,4);
// console.log(arry4);

// const names = ["Ram", "Shyam", "Ravi", "Surya"];
// document.getElementById("str").innerHTML =names.toString()
// console.log(names.toString());

// names.push("Maya");
// names.pop();
// names.pop();
// names.pop();

// console.log(names.shift())
// console.log(names.unshift("Ravi"));
// console.log(names.unshift("Surya"));

// delete names[1];
// delete names[2];
// delete names[3];

// Splice
// Slice

// names.splice(1, 0, "Maya", "Mukesh");
// names.splice(0,1);

// console.log(names.slice(1));
// console.log(names.slice(0, 1));

// console.log(names);

var arry5 = ["a", "b", "c"];
var arry6 = ["d", "e", "f"];

// var arry7 = [...arry5, ...arry6];
// arry5.push(...arry6);
// console.log(arry7)
// console.log(arry5)
// arry5.splice(1, 0, ...arry6);
// console.log(arry5);

//  var arry8 = arry5.concat(arry6);
//  console.log(arry5, arry8)

// console.log(arry5.toString());
// console.log(arry5.join("*"));

// Sorting
// const num1 = [10, 2, 60, 5, 7];
// num1.sort((n1, n2) => n1 - n2);
// console.log(num1);
// console.log("Smallest=", num1[0], "Greatest=", num1[num1.length-1]);

// num1.sort((n1, n2) => n2 - n1);
// console.log(num1);
// console.log("Smallest=", num1[num1.length-1], "Greatest=", num1[0]);

const text1 = ["z", "a", "f", "b", "c"];
// console.log(text1.sort());
// console.log(text1[0],text1[text1.length-1])
// console.log(text1.reverse());
// console.log(text1[text1.length-1],text1[0])

// text1.map((value, index, arry)=>{
//     console.log(index, value, arry);
// })

text1.map(myFunc);

function myFunc(value, index, arry) {
  console.log(index, value, arry);
}

text1.forEach((value, index, arry)=> console.log(index, value, arry))
text1.forEach(myFunc);
