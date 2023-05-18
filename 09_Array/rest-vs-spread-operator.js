// rest:
const arrNumber = [1, 2, 3, 4, 5];
const [first, second, ...lastNumberList] = arrNumber;
console.log({ first, second, lastNumberList });
console.log([first, second, lastNumberList]);

//spread:
const newArrNumber = [...arrNumber];
console.log(newArrNumber);
