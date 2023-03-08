// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge2 = function (ages) {
    const humanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4)
    const adults = humanAges.filter((age) => age >= 18)

    const average = adults.reduce((aver, age, i, arr) => aver + age / arr.length, 0)
    const total = adults.reduce((total, age) => total + age)
    const average2 = total / adults.length
    console.log(average)
}

console.log("calcAverageHumanAge2..")
calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4])

// Solution
const calcAverageHumanAge = ages => ages
    .map((age) => age <= 2 ? 2 * age : 16 + age * 4)
    .filter((age) => age >= 18)
    .reduce((aver, age, i, arr) => aver + age / arr.length, 0)

console.log("calcAverageHumanAge...")
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

