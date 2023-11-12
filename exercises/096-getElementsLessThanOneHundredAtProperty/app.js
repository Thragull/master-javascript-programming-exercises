// Write your function here
function getElementsLessThan100AtProperty (obj, key){
    let arr = [];
    if ((!obj[key]) || (obj[key].length === 0) || (!Array.isArray(obj[key]))) return arr;
    arr = obj[key].filter((element) => element < 100);
    return arr;
}