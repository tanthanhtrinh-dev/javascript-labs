const array1 = [1, 2, 3];

console.table(array1);

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

const array2 = [1, 2, 3, 5];
array2.splice(3, 0, 4);
console.table(array2);
