let a = b = 0.2;

console.info(a +"_"+ b);

a = 0.3;

console.info(a +"_"+ b);

let m = {
    stock: 0,
    weight: undefined,
}

//console.log(Number.parseFloat(m?.weight || 0.0))
//console.log(Number.parseFloat(m?.weight ?? 0.0));


const isLog = Boolean("FALSE");
console.log(isLog);
