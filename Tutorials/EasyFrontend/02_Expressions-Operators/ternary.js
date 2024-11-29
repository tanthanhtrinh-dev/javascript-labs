//Ternary => Toan tu 3 ngoi

//Syntax condition ? exprIfTrue : exprIfFalse
const mark = 5;

const grade = mark > 8 ? 'GOOD' : 'BAD';
// Avoid nested ternary
const grade = mark > 8 ? 'GOOD' : mark > 5 ? 'OK' : 'BAD';