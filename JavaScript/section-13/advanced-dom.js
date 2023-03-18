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
// const divEl = document.createElement("div");
// console.log(divEl)
// divEl.classList.add("section");
// divEl.textContent = "<p>This is div</p>"
// divEl.innerHTML = "<p>This is p tag</p>"
// divEl.id="section"

// document.body.appendChild(divEl)
// document.querySelector("#showDiv").appendChild(divEl)
// document.querySelector("#showDiv").append(divEl)

// // Delete Elements 
// divEl.parentElement.removeChild(divEl)
// const headingEl = document.querySelector("#heading-2")
// headingEl.parentElement.removeChild(headingEl)

// Styles, Attributes and Classes
// const btnEl = document.querySelector("button")
// console.log(btnEl)

// btnEl.style.width='200px'
// btnEl.style.color='black'

// btnEl.id = "btn"
// btnEl.name = "submitBtn"

// btnEl.classList.add("btn", "btn-primary")

// console.log(btnEl.style.width)
// console.log(btnEl.id)
// console.log(btnEl.name)
// console.log(btnEl.classList)

const imgEl = document.createElement("img")
console.log(imgEl)
imgEl.src ="https://dummyimage.com/640x360/fff/aaa2"
imgEl.alt = "Placeholder Image"

imgEl.style.height ="200px";
imgEl.style.width = "300px"
imgEl.style.border ="2px solid red"

imgEl.classList.add("img", "img2")
imgEl.classList.remove("img2")

document.body.appendChild(imgEl)

imgEl.addEventListener("mouseenter", function(){
    imgEl.style.border ="2px solid green"
})

imgEl.addEventListener("mouse", function(){
    imgEl.style.border ="2px solid red"
})

// ============================
const linkEl = document.createElement("a")
linkEl.textContent = "Click here"
linkEl.href = "#"
linkEl.target ="_blank"

linkEl.classList.add("link")

linkEl.style.color = "green"
document.body.appendChild(linkEl)

// create div element
// add height, width, backgroundcolor, border, shadow 
// add class = card
// add id and key (attribute)

// add events 
// 1. click
// 2. mouseenter
// 3. mouseout
// 4. mousemove

// Create modal popup design with HTML and CSS