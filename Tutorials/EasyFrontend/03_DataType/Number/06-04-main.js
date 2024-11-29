

const count = 1;
const mark = 9.5;
const long = 1000000;
const longer = 1_000_000;// rare usage const short = 1e6; // usually see this
const smaller = 0.0001;
const smallerShort = 1e-4;

Number('123'); // 123 Number.parseInt('1.5'); // 1 Number.parseFloat('1.5') // 1.5
Number('123.5a'); // NaN Number.parseInt('123.5a'); // 123 Number.parseFloat('123.5a') // 123.5
Number(null); // 0 Number(undefined); // NaN
Number(true); // 1 Number(false); // 0
//console.log(smallerShort);
