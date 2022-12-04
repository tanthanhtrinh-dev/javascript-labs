/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * @type {string}
 */

const basicFor = ()=>{
    let str = '';
    for (let i = 0; i < 9; i++) {
        str = str + i;
    }
    console.log(str);
// expected output: "012345678"
};


basicFor();