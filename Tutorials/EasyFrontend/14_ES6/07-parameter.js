// move default parameter to the right most
// function sum(a, b) {}
// function sum(a, b = 10) {}
// function sum(a = 5, b = 10) {}

// ES5 - arguments
function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(1)); // 1 console.log(sum(1, 2)); // 3 console.log(sum(1, 2, 3)); // 6

// convert arguments to Array
function sum() {
  return [...arguments].reduce((total, number) => total + number); // or using Array.from();
}
console.log(sum(1, 2, 3));

// ES6 - Prefer this way instead of arguments
function sum(...numberList) {
  return numberList.reduce((total, number) => total + number);
}
console.log(sum(1, 2, 3));

//Spread operator
function sum(...numberList) {
  return numberList.reduce((total, number) => total + number);
}
console.log(sum(1, 2, 3)); // 6
const numberList = [1, 2, 3];
console.log(sum(...numberList)); // 6

function sum() {} // function declaration
const sum = function () {}; // function expression
const sum = () => {}; // arrow function

//Constructor function

//Curry function
