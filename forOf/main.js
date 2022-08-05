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


const forOfObject= ()=>{
    const myInfo = {
        name: 'tan trinh',
        age: 34,
    }
    //method 1 to get value
    for (const value of Object.values(myInfo)) {
        console.log(`${value}`);
    }

    //method 2 to get key
    for (const value of Object.keys(myInfo)) {
        console.log(`${value}`);
    }
}

forOfObject();