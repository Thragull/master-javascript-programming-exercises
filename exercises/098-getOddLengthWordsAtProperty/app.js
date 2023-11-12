// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    let arr = [];
    if ((!obj[key]) || (obj[key].length === 0) || (!Array.isArray(obj[key]))) return arr;
    arr = obj[key].filter((element) => element.length%2 === 1);
    return arr;
}