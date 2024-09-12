//Unary operators => Toán tử một ngôi
// Referent https://en.wikipedia.org/wiki/Unary_operation

const count = -1;
const negativeCount = -count; // -1
console.log(negativeCount);
console.log('-----------------------');

let idx = 1;
const incrementPrefix = ++idx; // 2
console.log(incrementPrefix);
console.log('-----------------------');

let _idx = 1;
const incrementSuffix = _idx++; // 1
console.log(incrementSuffix);
console.log(_idx);
console.log('-----------------------');

const quantity = +'2'; // number 2
console.log(`convert string to ${typeof quantity}`);
console.log('-----------------------');
const isValid = !true; // false