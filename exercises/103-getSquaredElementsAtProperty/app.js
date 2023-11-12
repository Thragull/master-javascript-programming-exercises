function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let array = [];
    if ((!obj[key]) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return array;
    array=obj[key].map((element) => element*element);
    return array;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
