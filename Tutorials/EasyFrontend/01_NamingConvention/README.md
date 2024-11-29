
# Naming Convention
___
**Variables in Javascript**
```javascript
// ES5
var name = 'Easy Frontend';
// ES6
const PI = 3.14;
const name = 'Easy'
name = 'Frontend'; // error Assignment to constant variable
let count = 1;
count = 2; // works
```

**Case styles**

| #    | Style      | Example                    | Used for                         |
|------|------------|----------------------------|----------------------------------|
| 1    | camelCase  | student, studentList       | identifier (var name, func name) |
| 2    | UPPER_CASE | PI, API_URL                | constants                        |
| 3    | PascalCase | Menu, Sidebar, ProductList | Class or Component               |
| 4    | snake_case | student_name               | no usage in js                   |
| 5    | kebab-case | menu-item                  | CSS class name                   |

```javascript
const sanPham = 'js course'; // BAD
const product = 'js course'; // BAD
const productName = 'js course'; // GOOD
// true/false variables
let hasValidItem = true;
let isSelected = false;
let show = false;
let hasPositiveNumber = false;
// single noun
const student = {
 name: 'Easy Frontend',
}
// plural noun
const students = [].map(student => console.log(student.name)); // OK
const studentList = [].map(student => console.log(student.name)); // GOOD
```