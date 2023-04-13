import { greet, greet1, greet2, greet3 } from "./shoppingCart.js"
import { add } from "./shoppingCart.js"
import { abc } from "./main.js"

console.log("Importing Module....", greet, greet1, greet2, greet3)

// add(10, 20)
// console.log("ABC", abc)


// ==============================================
// import { company, getCompany } from "./company.js"
// import { company as companyName, getCompany as getCompanyFunc } from "./company.js"

// import * as myCompany from "./company.js"

// console.log(company)
// console.log(getCompany())

// console.log("Company Name", companyName)
// console.log("getCompanyFunc", getCompanyFunc())

// console.log(myCompany.company)
// console.log(myCompany.getCompany())

// myCompany.setCompany("Microsoft")

// console.log(myCompany.company)
// console.log(myCompany.getCompany())

// =======================================================


// import c, { company } from "./company.js"

// console.log("getCompanyName", c.getCompanyName(), company)
// c.setCompanyName("Microsoft");
// console.log("getCompanyName", c.getCompanyName(), company)


// ===========================================================
// Cart example 

import addToCart, { cart } from "./shoppingCart.js"

addToCart('Apple', 5)
addToCart('Orange', 15)
console.log("Cart", cart)