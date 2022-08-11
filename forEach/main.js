/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * @type {string}
 */


const basicFor = ()=>{

    let languages = ['javascript','php','ruby'];

    languages.forEach((item, index)=>{
        console.log(`item: ${item}::Index: ${index}`);
    });

};


basicFor();