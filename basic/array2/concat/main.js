
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
//console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// const array0 = [12];
// console.log([...array0]);

//Advanced concat
let _aggregate = [ {
    match: {
      tpfOrderID: 0,
    },
  },
];
_aggregate.push({
    match2: {
      tpfOrderID: 0,
    },
  },);

  _aggregate.unshift({
    match0: {
      tpfOrderID: 0,
    },
  });

_aggregate = [..._aggregate, {limit: 2}];

console.log(_aggregate);

