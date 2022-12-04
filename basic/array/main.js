/**
 * Language
 * https://www.w3schools.com/js/js_arrays.asp
 */

const languages = [
    'javascript','php','ruby'
];

//console.log(languages);
let previousValue = '';
let step = 0;

const buildQueryTagsName = (preVal, currentVal, index) => {
    //previousValue, (item) =>{`tag_not: ${item} AND`};
    //console.log(preVal);
    console.log(index);
    if(currentVal && currentVal.length>0)
    {
        console.log(currentVal);
    }
    step++;
};

const queryTags = languages.reduce(buildQueryTagsName, '');

//console.log(queryTags);
