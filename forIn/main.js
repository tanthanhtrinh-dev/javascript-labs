/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 * @type {string}
 */
const forIn= ()=>{
    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
    }
}

const forInText= ()=>{
    const myString = 'Javascript';
    for (const str in myString) {
        console.log(`${str}`);
    }
}
forInText();