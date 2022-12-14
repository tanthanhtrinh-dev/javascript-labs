
//https://stackoverflow.com/questions/4090491/how-to-get-the-first-element-of-an-array?page=2&tab=scoredesc#tab-top
let {0 : first ,length : l, [l - 1] : last} = [22,1,4,55,7,8,9,3,2,4];
console.log(first, last);
