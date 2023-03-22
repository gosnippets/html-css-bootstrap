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

// const imgEl = document.createElement("img")
// console.log(imgEl)
// imgEl.src ="https://dummyimage.com/640x360/fff/aaa2"
// imgEl.alt = "Placeholder Image"

// imgEl.style.height ="200px";
// imgEl.style.width = "300px"
// imgEl.style.border ="2px solid red"

// imgEl.classList.add("img", "img2")
// imgEl.classList.remove("img2")

// document.body.appendChild(imgEl)

// imgEl.addEventListener("mouseenter", function(){
//     imgEl.style.border ="2px solid green"
// })

// imgEl.addEventListener("mouse", function(){
//     imgEl.style.border ="2px solid red"
// })

// // ============================
// const linkEl = document.createElement("a")
// linkEl.textContent = "Click here"
// linkEl.href = "#"
// linkEl.target ="_blank"

// linkEl.classList.add("link")

// linkEl.style.color = "green"
// document.body.appendChild(linkEl)

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

// const mainEl = document.querySelector("#main")
// console.log(mainEl);
// console.log(mainEl.childNodes)
// console.log(mainEl.children)
// mainEl.firstElementChild.style.border= "2px solid green";
// mainEl.lastElementChild.style.border= "2px solid blue";
// console.log(mainEl.lastElementChild)

// console.log(mainEl.parentNode)
// console.log(mainEl.parentElement)
// console.log(mainEl.closest(".closest"))

// console.log(mainEl.nextElementSibling)
// console.log(mainEl.previousElementSibling)

// console.log(mainEl.previousSibling)
// console.log(mainEl.nextSibling)

// const allBtn = mainEl.children
// const parentEl = mainEl.parentElement.children
// console.log(...allBtn)
// console.log(...mainEl.parentElement.children)

// for(let el of allBtn){
//     el.style.border = "5px solid green"
//     console.log(el)
// }

// for(let el of parentEl){
//     console.log(el)
// }


// Scroll Example
// Sticky Navigation 
// Lifecycle of DOM events  

const myDivEl = document.querySelector("#myDiv");
console.log(myDivEl)
console.log(myDivEl.childNodes)
console.log(myDivEl.children)
console.log(myDivEl.firstElementChild)
console.log(myDivEl.lastElementChild)
myDivEl.firstElementChild.style.border = "5px solid red"
myDivEl.lastElementChild.style.border = "5px solid blue"

console.log(document.body.parentElement)
console.log(document.body.parentNode)
const html = document.body.parentElement
console.log(html.parentElement);
console.log(html.parentNode)

console.log(myDivEl.closest(".div1"))
console.log(myDivEl.previousElementSibling)
console.log(myDivEl.nextElementSibling)

const allBtn = myDivEl.children
for (let btnEl of allBtn) {
    btnEl.style.border = "5px solid red"
}

const newBtnEl = document.createElement("button")
newBtnEl.textContent = "Button 5"
newBtnEl.classList.add("btn", "btn5")
console.log(newBtnEl)
myDivEl.appendChild(newBtnEl)

// Lifecycle of DOM Element 
// 1. DOMContentLoaded
// 2. load
// 3. beforeunload

// window.addEventListener("DOMContentLoaded", function (e) {
//     console.log("DOMContentLoaded", e, myDivEl)
//     this.alert("Hello")
// })

// window.addEventListener("load", function (e) {
//     console.log("load", e, myDivEl)
//     // this.alert("Page loaded")
// })

// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     console.log("beforeunload", e)
//     e.returnValue='';
// })

// Scroll example
const scrollTopBtnEl = document.querySelector("#scroll-to-top")
scrollTopBtnEl.addEventListener("click", function () {
    // document.body.scrollTop = 0
    // document.documentElement.scrollTop = 0

    // window.scrollTo({
    //     left: 0,
    //     top: 0,
    //     behavior: "smooth"
    // })
    document.body.scrollIntoView({ behavior: "smooth" })
})

const scrollNextEl = document.querySelector("#scrollNext")
const sectionSecondEl = document.querySelector("#section-second")
scrollNextEl.addEventListener("click", function () {
    const sectionCoords = sectionSecondEl.getBoundingClientRect()
    console.log(sectionCoords)
    console.log("Current scroll", window.pageXOffset, window.pageYOffset)

    // window.scrollTo({
    //     left: sectionCoords.left,
    //     top: sectionCoords.top,
    //     behavior:"smooth"
    // })

    sectionSecondEl.scrollIntoView({ behavior: "smooth" })
})

function func1(event){
    alert("Div1")
}

function func2(event){
    alert("Div2")
    event.stopPropagation()
}