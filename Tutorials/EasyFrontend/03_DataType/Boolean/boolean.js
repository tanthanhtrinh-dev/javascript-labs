// Type coersion => automatically convert to the type
const a = 1 + '2'; // '12' as it auto convert from number 1 to string '1' before doing the addition
console.log(a);

//check array
const arr = [];
arr && arr.length ? console.log('Have item in array') : console.log(`Don't have item in array`);

const boolVal = {};
console.log(!boolVal?.length);

1 && console.log('action');
