const score0El = document.getElementById("score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const diceEl = document.querySelector(".dice");
const btnNewEl = document.querySelector(".btn--new")
const btnRollEl = document.querySelector(".btn--roll")
const btnHoldEl = document.querySelector(".btn--hold")

let currentScore = 0, activePlayer = 0;
let scores = [0, 0]
current0El.textContent = 0
current1El.textContent = 0


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    console.log("Active Player", activePlayer);

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");


}

btnRollEl.addEventListener("click", function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden")
    diceEl.src = `img/dice-${dice}.png`;
    if (dice !== 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }







})