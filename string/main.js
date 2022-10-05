
const get4LastCharacters  = ()=>{
    const str = '•••• •••• •••• 1089';
    const n = 4;
    console.log(str.slice(str.length - n));
}

const get4LastCharactersM2  = ()=>{
    const str = '•••• •••• •••• 1089';
    const n = 4;
    console.log(str.slice(-n));
}

const testTrim = ()=>{
    const strTest = " 123  ";
    console.log(strTest.length);
    console.log(strTest.trim().length);
}

const ex = () => {
  
}
//get4LastCharacters();
//get4LastCharactersM2();
//testTrim();