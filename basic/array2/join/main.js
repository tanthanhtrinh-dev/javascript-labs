/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */

const basicJoin = () => {
  const elements = ['Fire', 'Air', 'Water'];

  console.log(elements.join());
  // expected output: "Fire,Air,Water"

  console.log(elements.join(''));
  // expected output: "FireAirWater"

  console.log(elements.join('-'));
  // expected output: "Fire-Air-Water"

  console.log(elements.join(' OR '));
};

//basicJoin();

const shopifyOrderIds = [5584029614244, 5584079061156];
console.log(shopifyOrderIds.toString());
