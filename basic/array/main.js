/**
 * Language
 * https://www.w3schools.com/js/js_arrays.asp
 */

const languages = ['javascript', 'php', 'ruby'];

console.log(languages.length);
//console.log(languages);
let previousValue = '';
let step = 0;

const buildQueryTagsName = (preVal, currentVal, index) => {
  //previousValue, (item) =>{`tag_not: ${item} AND`};
  //console.log(preVal);
  console.log(index);
  if (currentVal?.length > 0) {
    console.log(currentVal);
  }
  step++;
};

//const queryTags = languages.reduce(buildQueryTagsName, '');
//console.log(queryTags);

let shopifyOrderIDs = ["gid://shopify/Order/6124834783396", "gid://shopify/Order/6124834783397"];

const orderIDs = shopifyOrderIDs.map(m => m.replace("gid://shopify/Order/", ""));

console.log(orderIDs);
