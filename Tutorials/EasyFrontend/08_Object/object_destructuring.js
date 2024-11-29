const student = {
  name: 'Tan Trinh',
  age: 18,
};
//using object destructuring
const { name, age } = student;
//double-check key value

console.log('name' in student);
console.log('className' in student);
