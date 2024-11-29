import validator from 'validator';

console.log("Hello world!!");
const emailValidator = validator.isEmail('foo@bar.com');

console.log(emailValidator);

console.log("End App");