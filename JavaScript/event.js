//  function onLoadFunc(text){
//    console.log(text)
//  }

//  function onChangeHandler(elm){
//     document.getElementById("showname").innerHTML = elm.value;
//  }

//  function onFocusHandler(el){
//     el.style.backgroundColor= "red";
//  }

//  function onSelecthandler(element) {
//     console.log(element)
//     element.style.color= "red";
//     document.getElementById("showname").innerHTML = element.value;
//  }

//  function onSubmitHandler() {
//     console.log("onSubmitHandler")
//     var name = document.getElementById("name").value
//     var age = document.getElementById("age").value

//     document.getElementById("showname").innerHTML ="Name : "+ name+ ", Age : "+age;
//  }

//  Todo
// input
// submit

// list

let myList = "";

const myInput = document.querySelector("input")
const myListView = document.querySelector("ul")

console.log("Input Element", myInput)
console.log("UL Element", myListView)

document.querySelector("button").addEventListener("click", function () {
   myList = myList + "<li>" + myInput.value + "</li>"
   myInput.value = ""
   myListView.innerHTML = myList
   console.log(myList)
})

const ab = "3"

console.log(typeof ab)
console.log(typeof parseInt(ab))
console.log(typeof Number(ab))

// function  createList() {
//    myList = myList + "<li>" + myInput.value + "</li>"
//    myInput.value = ""
//    myListView.innerHTML = myList
//    console.log(myList)
// }