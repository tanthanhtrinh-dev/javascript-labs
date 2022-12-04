/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 */
const doWhiteBasic = ()=>{
    let result = '';
    let i = 0;

    do {
        i = i + 1;
        result = result + i;
    } while (i < 5);

    console.log(result);
// expected result: "12345"
}

const tryEnterPassword = ()=>{
    let i = 0;
    let isSuccess = false;
    do {
        i++;
        console.log('Login lan '+i);
        if(false){
            isSuccess = true;
        }
    }while (!isSuccess && i<=3);
}

//doWhiteBasic();
tryEnterPassword();