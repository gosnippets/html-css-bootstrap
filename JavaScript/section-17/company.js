// let company = "Google";

// let getCompany = function () {
//     return company;
// }

// let setCompany = function (newCompany) {
//     company = newCompany
// }

// export { company, getCompany, setCompany }


// ======================================

export let company = "Google"

let companyObj = {
    getCompanyName: function () {
        return company;
    },
    setCompanyName: function (newCompanyName) {
        company = newCompanyName
    }
}

export default companyObj;