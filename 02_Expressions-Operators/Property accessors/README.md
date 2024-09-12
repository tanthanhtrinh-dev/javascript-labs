# [Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)

>**Property accessors** provide access to an object's properties by using the dot notation or the bracket notation.

**Syntax**
```javascript

//dot notation
object.propertyName
//Bracket notation
object[expression]

object.#privateProperty
```

**Examples**
```javascript
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// Expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe',
};

console.log(person2['lastname']);
// Expected output: "Doe"
```
- Dot notation

```javascript
const object = {};
object["1"] = "value";
console.log(object[1]);
```


- Bracket notation

```javascript
const variable = object[propertyName];
object[propertyName] = value;


```

- Private properties