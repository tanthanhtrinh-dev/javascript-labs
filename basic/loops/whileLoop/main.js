/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * @type {string}
 */

const whiteLoopBasic = ()=>{
    let n = 0;
    while (n < 3) {
        n++;
    }
    console.log(n);
}

const whiteLoopArr= ()=>{
    const myArr = ['PHP','Dart','.Net Core'];
    let n = 0;
    while (n < myArr.length) {
        n++;
    }
    console.log(n);
}

whiteLoopBasic();
whiteLoopArr();