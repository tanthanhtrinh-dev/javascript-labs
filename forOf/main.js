/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 * @type {string}
 */


const forOfBasic= ()=>{
    const myArr = ['PHP','Java','Dart']
    for (const value of myArr) {
        console.log(`${value}`);
    }
}
forOfBasic();