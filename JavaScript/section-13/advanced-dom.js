// ======================================================
// console.log(document)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)


// // Selecting Elements 
// const heading1 = document.querySelector("h2")
// console.log(heading1)
// const heading = document.querySelectorAll("h2")
// console.log(heading)
// const headingWithClass = document.querySelectorAll(".heading-2")
// console.log(headingWithClass)
// const elbyID = document.getElementById("heading-2")
// console.log(elbyID)
// const elbyClassName = document.getElementsByClassName("heading-2")
// console.log(elbyClassName)
// const elbyTagName = document.getElementsByTagName("h2")
// console.log(elbyTagName)

// Create and Insert elements
const divEl = document.createElement("div");
console.log(divEl)
divEl.classList.add("section");
divEl.textContent = "<p>This is div</p>"
divEl.innerHTML = "<p>This is p tag</p>"
divEl.id="section"

document.body.appendChild(divEl)
document.querySelector("#showDiv").appendChild(divEl)
document.querySelector("#showDiv").append(divEl)

// Delete Elements 
divEl.parentElement.removeChild(divEl)
const headingEl = document.querySelector("#heading-2")
headingEl.parentElement.removeChild(headingEl)