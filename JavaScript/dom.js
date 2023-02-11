
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
}

let statusEl = document.querySelector(".status");
let checkBtnEl = document.querySelector(".check-btn");
let bodyEl = document.querySelector("body");
let inputNumberEl = document.querySelector(".input-number");
let remainingChanceEl = document.querySelector(".remaining-chance")

let remaningChance = 20;
let bestScore = 0;
let statusStr = "";

function decrementChance() {
    remaningChance--;
    remainingChanceEl.textContent = remaningChance;
}

function checkNumber() {
    let inputNumber = Number(inputNumberEl.value);

    if (inputNumber === randomNumber) {
        if (bestScore <= remaningChance) {
            bestScore = remaningChance;
            document.querySelector(".best-score").textContent = bestScore
        }
        statusStr = "<span class='text-success'>You Won!</span>";
        checkBtnEl.disabled = true;
        bodyEl.style.backgroundColor = "#71d8b8";
        document.querySelector(".random-number").textContent = randomNumber;

    } else {
        if (remaningChance <= 1) {
            checkBtnEl.disabled = true;
            statusStr = "<span class='text-danger'>Game over!</span>";
        } else {
            statusStr = (inputNumber > 20 || inputNumber < 1) ? "<span class='text-danger'>Invalid Input</span>" :
                (inputNumber > randomNumber) ? "<span class='text-warning'>Too High!</span>" :
                    (inputNumber < randomNumber) ? "<span class='text-warning'>Too Low!</span>":null
        }
    }

    statusEl.innerHTML = statusStr;
    decrementChance();
}

function resetGame() {
    generateRandomNumber();
    remaningChance = 20;
    remainingChanceEl.textContent = remaningChance;
    inputNumberEl.value = ""
    checkBtnEl.disabled = false;
    statusEl.innerHTML = "<span>Your status</span>";
    bodyEl.style.backgroundColor = "white";
}

checkBtnEl.addEventListener("click", () => checkNumber())
document.querySelector(".play-again-btn").addEventListener("click", () => resetGame())

