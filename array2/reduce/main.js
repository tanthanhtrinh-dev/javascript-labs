
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * forEach
 * every
 * some
 * find
 * filter
 * map
 * reduce
 */
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

const orders = [{name: "a", point: 5}, {name: "b", point: 2}, {name: "c", point: 3}];

const example2Reduce = () => {
    //const orders = [{name: "a", point: 5}, {name: "b", point: 2}, {name: "c", point: 3}];
    const totalPoint = orders.reduce(
        (total,order )=>{return total+order.point}
        ,0);
    console.log(totalPoint);
};

const example2Reduce = () => {

    let step = 0;

    const totalPoint = orders.reduce(
        (total,order )=>{

            console.log(step);

            return total+order.point;
        });
    console.log(totalPoint);
};

//exampleReduce();
example2Reduce();