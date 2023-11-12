function getOddElementsAtProperty(obj, key) {
    // your code here
    let array = [];
    if ((!obj[key]) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return array;
    array=obj[key].filter((element) => element%2 === 1);
    return array;
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
