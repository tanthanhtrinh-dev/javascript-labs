
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
//get4LastCharacters();
get4LastCharactersM2();