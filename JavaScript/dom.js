
// console.log(document.getElementById("username"))
// console.log(document.getElementsByTagName("h1"))
// console.log(document.getElementsByClassName("heading"))

// console.log(document.querySelector(".heading"))
// console.log(document.querySelector("#username"))
// console.log(document.querySelector("h1"))
// console.log(document.querySelectorAll("h1")[1])

// document.getElementsByTagName("h1")[0].style.backgroundColor = "red"
// document.querySelectorAll("h1")[1].style.backgroundColor = "blue"
// document.querySelectorAll("h1")[1].style.color = "white"

// const divEl = document.querySelector("div");
// divEl.textContent = "This is div"
// divEl.style.height = "300px"
// divEl.style.width = "600px"
// divEl.style.background = "#673ab7"
// divEl.style.color = "rgb(230 207 201)"

let randomNumber;
generateRandomNumber();

function generateRandomNumber() {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".random-number").textContent = randomNumber
}

let statusEl = document.querySelector(".status");
let remaningChance = 20;
let bestScore = 0;

function decrementChance() {
    remaningChance--;
    document.querySelector(".remaining-chance").textContent = remaningChance;
}

function checkNumber() {
    let inputNumber = Number(document.querySelector(".input-number").value);
    decrementChance();
    if (inputNumber === randomNumber) {
        if(bestScore<=remaningChance) bestScore = remaningChance;
        document.querySelector(".best-score").textContent = bestScore
        statusEl.innerHTML = "<span class='text-success'>You Won!</span>"
    } else if (inputNumber > 20 || inputNumber < 1) {
        statusEl.innerHTML = "<span class='text-danger'>Invalid Input</span>"
    } else if (inputNumber > randomNumber) {
        statusEl.innerHTML = "<span class='text-warning'>Too High!</span>"
    } else if (inputNumber < randomNumber) {
        statusEl.innerHTML = "<span class='text-warning'>Too Low!</span>"
    }

}

function resetGame() {
    generateRandomNumber();
    remaningChance = 20;
    document.querySelector(".remaining-chance").textContent = remaningChance;
    document.querySelector(".input-number").value=""
}

document.querySelector(".check-btn").addEventListener("click", () => checkNumber())
document.querySelector(".play-again-btn").addEventListener("click", () => resetGame())

