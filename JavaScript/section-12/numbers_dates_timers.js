// var num = '50';
// console.log(typeof num)
// console.log(typeof Number(num))

// console.log(num == 50);
// console.log(num === 50)
// console.log(Number(num) === 50)
// console.log(2 === Number('2'))

// console.log(20 === 20.000) // output: true
// console.log(20 === 20.1) // output: false

// var id = 1234 + '-NH'
// console.log(id)
// var total = 10 + 5 + num + 5// Output: 15505
// var total2 = num + 10 // Output: 5010
// console.log(total)
// console.log(total2)

// console.log(100 + 30 + '20' + 50 + 30) // Output: 130205030
// console.log(+'30') //output:  30
// console.log(typeof +'30')

// console.log(Number.parseInt('#100abc30')) // Output: 100

// // isNaN
// console.log(Number.isNaN(Number.parseInt('#100abc30')))
// console.log(Number.isNaN(40))

// // isFinite
// console.log(Number.isFinite(10))
// console.log(Number.isFinite(10 / 0))

// // isInteger
// console.log(Number.isInteger(40))
// console.log(Number.isInteger(40.5))


// // 1000-9999 // generate random 4 digit number
// // 0-0.99 Math.random()
// console.log(Math.floor(Math.random() * 10000) + 1)
// function generateOTP() {
//     const otp = '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
//     return otp
// }

// const h2El = document.querySelector("h2");
// document.querySelector("button").addEventListener("click", function () {
//     h2El.textContent = generateOTP();
// })

// // Math.round()
// console.log(Math.round(10.6))
// console.log(Math.round(10.5))
// console.log(Math.round(10.4))

// // Math.floor()
// console.log(Math.floor(10.6))
// console.log(Math.floor(10.5))
// console.log(Math.floor(10.4))

// // Math.ceil
// console.log(Math.ceil(10.6))
// console.log(Math.ceil(10.5))
// console.log(Math.ceil(10.4))
// console.log(Math.ceil(10.0))

// // Math.trunc
// console.log(Math.trunc(10.6456))
// console.log(Math.trunc(10.5))
// console.log(Math.trunc(10.4))
// console.log(Math.trunc(10.0))

// // toFixed(2)
// console.log((100 / 3).toFixed(0))
// console.log((100 / 3).toFixed(1))
// console.log((100 / 3).toFixed(2))

// // Remainder Operator (%)
// console.log(100 / 3)
// console.log(100 % 3)
// console.log(3 % 2) // 1
// console.log(14 % 5) // 4

// const isOddNumber = n => n % 2 === 1
// console.log(isOddNumber(3))
// console.log(isOddNumber(4))
// console.log(isOddNumber(5))

// // Numeric Separator
// const abc = 20_40_50_70
// console.log(typeof abc);

// console.log(typeof Number(abc))
// console.log(typeof parseInt(abc))

// Dates 
// console.log(new Date('2022 03 27 13:03:44'))
// const date1 = new Date('2022 03 27 13:03:44');
// const date2 = new Date();
// const date3 = new Date();
// console.log(date2, date3)
// console.log(date2 >= date3)

// if (date1 > new Date()) {
//     console.log("Future Date")
// } else {
//     console.log("Past date")
// }

// console.log(date1.getFullYear())
// console.log(date1.getMonth())
// console.log(date1.getDate())

// console.log(date1.getDay())
// console.log(date1.getHours())
// console.log(date1.getMinutes())
// console.log(date1.getSeconds())
// console.log(date1.getTime())

// console.log(new Date(1743060824000))

// console.log(Date.now())
// console.log(new Date(1678764949247))

// const h2El = document.querySelector("h2");

// setInterval(() => {
//     h2El.textContent = new Date()
// }, 1000)

// let num = 20;
// console.log(num)

// setTimeout(() => {
//     num = 50;
//     console.log(num)
// }, 5000)

const calcDaysPassed = (postedDate) => {
    const currentDate = new Date()
    return (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - postedDate) / (1000 * 60 * 60 * 24);
}

// const date1 = new Date('2020 03 27 13:03:44');
// 25  = 25 days
// 65  = 2 month and 5 days
// 366 = 1 years and 1 day

function getPostedDate(postedDate) {
    let formatDate = "";
    let totalDays = calcDaysPassed(postedDate);
    console.log("TotalDays", totalDays)
    if (totalDays >= 365) {
        let year = Math.floor(totalDays / 365)
        formatDate = year + " years "
        totalDays = totalDays % 365
    }

    if (totalDays >= 30) {
        let month = Math.floor(totalDays / 30)
        formatDate += month + " months "
        totalDays = totalDays % 30
    }

    if (totalDays < 30 && totalDays > 0) {
        formatDate += totalDays + " days "
    }
    console.log(formatDate)

}

getPostedDate(new Date(2023, 1, 10))

// Internationalizing Dates (Intl)
const newDate = new Date();
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
}
const intlDate = new Intl.DateTimeFormat("en-IN", options).format(newDate);
console.log("DateTime", intlDate)

// Internationalizing numbers (Intl)

const num = 20037745874.20;
const options2 = {
    style: 'currency',
    unit: 'celsius',
    currency: 'EUR'
}
const currentLang = navigator.language;
console.log(currentLang)
const intlNumber = new Intl.NumberFormat(currentLang, options2).format(num)
console.log("intlNumber", intlNumber)