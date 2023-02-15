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

let currentScore, activePlayer;
let scores;

const init = function () {
    currentScore = 0;
    activePlayer = 0;

    scores = [90, 90]
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];

    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    btnRollEl.disabled = false;
    btnHoldEl.disabled = false

    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");

    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
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

btnHoldEl.addEventListener("click", function () {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    if(scores[activePlayer]>90 && scores[activePlayer]<100){
        console.log("You are very close");
    }

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        btnRollEl.disabled = true;
        btnHoldEl.disabled = true
    } else {
        switchPlayer();
    }
})

btnNewEl.addEventListener("click", init)