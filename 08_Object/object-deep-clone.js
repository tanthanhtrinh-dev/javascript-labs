const student = {
  name: 'Easy Frontend',
  age: 18,
  mark: {
    math: 10,
    english: 7,
  },
};
const clonedStudent = {
  ...student,
};
clonedStudent.mark.math = 1;
console.log(student.mark.math); // 1  haha

// solution, clone nested levels if any
const clonedStudent = {
  ...student,
  mark: {
    ...student.mark,
  },
};
clonedStudent.mark.math = 1;
console.log(student.mark.math); // 10 works now
