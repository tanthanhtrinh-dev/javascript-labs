//1. Using Array.prototype.includes
const fruits = ["apple", "banana", "mango"];
const hasBanana = fruits.includes("banana");

console.log(hasBanana); // Output: true


//2. Using Array.prototype.indexOf
const fruits = ["apple", "banana", "mango"];
const hasBanana = fruits.indexOf("banana") !== -1;

console.log(hasBanana); // Output: true


//3. Using Array.prototype.find
const fruits = ["apple", "banana", "mango"];
const hasBanana = fruits.find(fruit => fruit === "banana") !== undefined;

console.log(hasBanana); // Output: true

//4. Using Array.prototype.some
const fruits = ["apple", "banana", "mango"];
const hasBanana = fruits.some(fruit => fruit === "banana");
console.log(hasBanana); // Output: true


//5. Using Set for Fast Lookup (especially for large arrays)
const fruits = new Set(["apple", "banana", "mango"]);
const hasBanana = fruits.has("banana");
console.log(hasBanana); // Output: true

//6. Using for Loop
const fruits = ["apple", "banana", "mango"];
let hasBanana = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "banana") {
    hasBanana = true;
    break;
  }
}

console.log(hasBanana); // Output: true

//7. Using for...of Loop
const fruits = ["apple", "banana", "mango"];
let hasBanana = false;

for (const fruit of fruits) {
  if (fruit === "banana") {
    hasBanana = true;
    break;
  }
}

console.log(hasBanana); // Output: true
