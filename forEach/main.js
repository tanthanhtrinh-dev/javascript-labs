/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * @type {string}
 */


const basicFor = ()=>{
    let languages = ['javascript','php','ruby'];
    console.log(`${ typeof languages.length}`)
    languages.forEach((item, index)=>{
        console.log(`item: ${item}::Index: ${index}`);
    });
};

const asyncFor = async ()=>{

    let languages = ['javascript','php','ruby'];
    let index = 0;

    for await (const item of languages) {
        console.log(`item: ${item}::Index: ${index}`);
        index++;
    }

    return index;
    // languages.forEach((item, index)=>{
    //     console.log(`item: ${item}::Index: ${index}`);
    // });
};

asyncFor().then((val)=>{
    console.log(`Xong roi: ${val}`);
});
//basicFor();