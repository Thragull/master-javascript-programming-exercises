function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let array = [];
    if ((!obj[key]) || (obj[key].length === 0) || (!Array.isArray(obj[key]))) return array;
    array = obj[key];
    array.pop();
    return array;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
