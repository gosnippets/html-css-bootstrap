
const playAgainBtnEl = document.querySelector(".play-again-btn");
const checkBtnEl = document.querySelector(".check-btn");
// const inputNumberEl = document.querySelector(".input-number");
const bodyEl = document.querySelector("body");
const remainingChanceEl = document.querySelector(".remaining-chance")
const bestScoreEl = document.querySelector(".best-score")
const statusEl = document.querySelector(".status")
const randomNumberEl = document.querySelector(".random-number");

let randomNumber, bestScore = 0, remaningChance;

const init = () => {
    checkBtnEl.disabled = false;
    document.querySelector(".input-number").value = "";
    remainingChanceEl.textContent = 20;
    remaningChance = 20;
    statusEl.textContent = "Your Status";
    randomNumberEl.textContent = "🎸";
    randomNumber = Math.trunc(Math.random() * 20) + 1;
}

init();

function checkNumber() {
    let inputNumber = Number(document.querySelector(".input-number").value);

    if (inputNumber === randomNumber) {
        if (remaningChance >= bestScore ) {
            console.log("You Won!", bestScore, remaningChance);
            bestScore = remaningChance;
            bestScoreEl.textContent = bestScore
        }
        statusStr = "<span class='text-success'>You Won!</span>";
        checkBtnEl.disabled = true;
        bodyEl.style.backgroundColor = "#71d8b8";
        randomNumberEl.textContent = randomNumber;

    } else {
        if (remaningChance <= 1) {
            checkBtnEl.disabled = true;
            statusStr = "<span class='text-danger'>Game over!</span>";
        } else {
            statusStr = (inputNumber > 20 || inputNumber < 1) ? "<span class='text-danger'>Invalid Input</span>" :
                (inputNumber > randomNumber) ? "<span class='text-warning'>Too High!</span>" :
                    (inputNumber < randomNumber) ? "<span class='text-warning'>Too Low!</span>" : null
        }
    }

    statusEl.innerHTML = statusStr;
    remaningChance--;
    remainingChanceEl.textContent = remaningChance;
}

checkBtnEl.addEventListener("click", () => checkNumber())
playAgainBtnEl.addEventListener("click", init);