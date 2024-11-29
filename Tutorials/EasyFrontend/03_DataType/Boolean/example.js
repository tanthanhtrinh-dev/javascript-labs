const result1 = true ?? 'DefaultValue';
const result2 = false ?? 'DefaultValue';
const result3 = false ?? null ?? 'DefaultValue';

console.log(result1);
console.log(result2);
console.log(result3);
