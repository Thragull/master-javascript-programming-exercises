function getEvenElementsAtProperty(obj, key) {
    // your code here
    let array = [];
    if ((!obj[key]) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return array;
    array=obj[key].filter((element) => element%2 === 0);
    return array; 
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
