

// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// const password = "Password123";

// const isValidPassword = passwordRegex.test(password);
// console.log(isValidPassword); // Output: true

const RegexExpressions = {
    /**
     * TPF Internal Code
     */
    InternalCodeFormat: /^(P?|TPF)([0-9]{9}$)/,    
};

const internalRegex = /^(P?|TPF)([0-9]{9}$)/;
const internalCode = "P000267543";
const isValidInternalCode = RegexExpressions.InternalCodeValidate.test(internalCode);
console.log(isValidInternalCode); 

