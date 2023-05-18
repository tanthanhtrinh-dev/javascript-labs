let matrix = [
  [0, 1, 1, undefined, 0, 1, 1, 0],
  [0, 0, 1, 1, 1, undefined, 0, -1],
  [-1, undefined, 1, 0, 1, -1, 0, 1],
  [undefined, 0, -1, 0, -1, 1, 0, -1],
  [1, 0, -1, 0, 0, 0, 0, undefined],
  [0, 0, -1, undefined, 0, 1, NaN, null],
];

//console.table(matrix);
const randomRanges = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//console.table(matrix.map((m) => m.map((n) => (n === undefined ? randomRanges(1, 11) : n))));
const matrix2 = matrix.map((m) => m.map((n) => n ?? randomRanges(1, 11)));
//console.table(matrix.map((m) => m.map((n) => n ?? randomRanges(1, 11))));
console.table(matrix);
console.table(matrix2);
