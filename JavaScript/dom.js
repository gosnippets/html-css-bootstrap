
// console.log(document.getElementById("username"))
// console.log(document.getElementsByTagName("h1"))
// console.log(document.getElementsByClassName("heading"))

// console.log(document.querySelector(".heading"))
// console.log(document.querySelector("#username"))
// console.log(document.querySelector("h1"))
// console.log(document.querySelectorAll("h1")[1])

document.getElementsByTagName("h1")[0].style.backgroundColor = "red"
document.querySelectorAll("h1")[1].style.backgroundColor = "blue"
document.querySelectorAll("h1")[1].style.color = "white"

const divEl = document.querySelector("div");
divEl.textContent = "This is div"
divEl.style.height = "300px"
divEl.style.width = "600px"
divEl.style.background = "#673ab7"
divEl.style.color = "rgb(230 207 201)"
