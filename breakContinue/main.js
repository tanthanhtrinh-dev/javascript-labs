/**
 *
 */
const breakBasic = ()=>{
    for (let i =0; i<10; i++){
        console.log(i);
        if(i>=5){
            break;
        }
    }
}

const breakInWhiteLoop=()=>{
    let i = 0;

    while (i < 6) {
        if (i === 3) {
            break;
        }
        i = i + 1;
    }
    console.log(i);
}

const continueBasic = ()=>{
    for (let i; i<=10; i++){
        if(i%2 !==0){
            continue
        }
        console.log(i);
    }
}

//breakBasic();
continueBasic();