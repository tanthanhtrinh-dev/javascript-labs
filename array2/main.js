/**
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * forEach
 * every
 * some
 * find
 * filter
 * map
 * reduce
 */

const exampleEvery = ()=>{
    //arrow function
    const isBelowThreshold = (currentValue) => currentValue < 40;
    const array1 = [1, 30, 39, 29, 10, 13, 50];
    console.log(array1.every(isBelowThreshold));
}


const exampleSome = ()=>{
    const array = [1, 2, 3, 4, 5];
    //checks whether an element is even
    const even = (element) => element % 2 === 0;
    console.log(array.some(even));
    // expected output: true
}

const exampleFilter = () => {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
}

const exampleReduce = () => {
    const array1 = [1, 2, 3, 4];

    // function sumItem(previousValue, currentValue){
    //     return previousValue + currentValue;
    // }
    const sumItem = (previousValue, currentValue, currentIndex, array) => {

        const total = previousValue + currentValue;

        console.table({
            'Step': currentIndex,
            'accumulator': previousValue,
            'value': currentValue,
            'Calculated': total,
        });

        return total;
    };

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        sumItem,
        initialValue
    );
    console.log(sumWithInitial);
// expected output: 10
}

exampleReduce();

//exampleEvery();
//exampleSome();
//exampleFilter();