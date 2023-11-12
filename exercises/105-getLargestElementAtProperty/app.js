function getLargestElementAtProperty(obj, key) {
    // your code here
    const emptyArray = [];
    if ((!obj[key]) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return emptyArray;
    let largest = obj[key][0];
    for (i=1; i<obj[key].length; i++){
      if (obj[key][i]>largest) largest = obj[key][i];
    }
    return largest;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
